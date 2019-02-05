import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Options} from './services/main.services';
import {Top} from './enums/tops.enum';
import {FacialHair} from './enums/facial-hair.enum';
import {Cloth} from './enums/clothe.enum';
import {Eyebrow} from './enums/eyebrow.enum';
import {Mouth} from './enums/mouth.enum';
import {Accessories} from './enums/accessories.enum';
import {ClothColor} from './enums/cloth-color.enum';
import {FacialHairColor} from './enums/facial-hair-color.enum';
import {Graphic} from './enums/graphic.enum';
import {HatColor} from './enums/hat-color.enum';
import {HairColor} from './enums/hair-color.enum';
import {Face} from './enums/face.enum';
import {AvatarStyle} from './enums/avatar-style.enum';
import {Eyes} from './enums/eyes.enum';
import {Skin} from './enums/skin.enum';
import {saveAs} from 'file-saver';
import {ActivatedRoute, Router} from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  avatarForm: FormGroup;
  options: Options;
  public canvasRef: HTMLCanvasElement;
  public  angularCode ;
  showAngular = false;
  showImage = false;
  showSvg = false;
  svgData: string;
  topsEnum = Top;
  facialHairEnum = FacialHair;
  clothesEnum = Cloth;


  accessories: Array<any>;
  clothColor: Array<any>;
  clothe: Array<any>;
  eyebrow: Array<any>;
  eyes: Array<any>;
  face: Array<any>;
  facialHair: Array<any>;
  facialHairColor: Array<any>;
  graphic: Array<any>;
  hairColor: Array<any>;
  hatColor: Array<any>;
  mouth: Array<any>;
  skin: Array<any>;
  tops: Array<any>;
  avatarStyle: Array<any>;

  constructor(private router: Router, private  activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    this.options = new Options();
    this.avatarForm = new FormGroup({
      'avatarStyle': new FormControl(this.options.style),
      'top': new FormControl(this.options.top),
      'accessories': new FormControl(this.options.accessories),
      'hairColor': new FormControl(this.options.hairColor),
      'hatColor': new FormControl(this.options.hatColor),
      'facialHair': new FormControl(this.options.facialHair),
      'facialHairColor': new FormControl(this.options.facialHairColor),
      'clothes': new FormControl(this.options.clothes),
      'colorFabric': new FormControl(this.options.clothColor),
      'eyes': new FormControl(this.options.eyes),
      'eyebrow': new FormControl(this.options.eyebrow),
      'mouth': new FormControl(this.options.mouth),
      'skin': new FormControl(this.options.skin),
      'face': new FormControl(this.options.face),
      'graphic': new FormControl(this.options.graphic),
    });


    this.avatarForm.valueChanges.subscribe(value => {
      this.options = value;
      this.toggleAngular(false);
      setTimeout(()=>{
        return this.toggleSvg(false); 
      }
        ,0
      );
     
     console.log('change')
      this.router.navigate([], {
        queryParams: {
          avatarStyle: this.options.style,
          top: this.options.top,
          accessories: this.options.accessories,
          hairColor: this.options.hairColor,
          hatColor: this.options.hatColor,
          facialHair: this.options.facialHair,
          facialHairColor: this.options.facialHairColor,
          clothes: this.options.clothes,
          colorFabric: this.options.clothColor,
          eyes: this.options.eyes,
          eyebrow: this.options.eyebrow,
          mouth: this.options.mouth,
          skin: this.options.skin,
          face: this.options.face,
          graphic: this.options.graphic,
        }
      });
      
     });


    this.tops = this.getEnumTupple(Top);
    this.facialHair = this.getEnumTupple(FacialHair);
    this.clothe = this.getEnumTupple(Cloth);
    this.eyes = this.getEnumTupple(Eyes);
    this.eyebrow = this.getEnumTupple(Eyebrow);
    this.mouth = this.getEnumTupple(Mouth);
    this.skin = this.getEnumTupple(Skin);
    this.accessories = this.getEnumTupple(Accessories);
    this.clothColor = this.getEnumTupple(ClothColor);
    this.face = this.getEnumTupple(Face);
    this.facialHairColor = this.getEnumTupple(FacialHairColor);
    this.graphic = this.getEnumTupple(Graphic);
    this.hatColor = this.getEnumTupple(HatColor);
    this.hairColor = this.getEnumTupple(HairColor);
    this.avatarStyle = this.getEnumTupple(AvatarStyle);


    this.activatedRoute.queryParams.pipe(filter(a=> !!a))
    .subscribe(data => {
      if(data['top']){
        this.options.style = data['avatarStyle'];
        this.options.top = data['top'];
        this.options.accessories = data['accessories'];
        this.options.hairColor = data['hairColor'];
        this.options.hatColor = data['hatColor'];
        this.options.facialHair = data['facialHair'];
        this.options.facialHairColor = data['facialHairColor'];
        this.options.clothes = data['clothes'];
        this.options.clothColor = data['colorFabric'];
        this.options.eyes = data['eyes'];
        this.options.eyebrow = data['eyebrow'];
        this.options.mouth = data['mouth'];
        this.options.skin = data['skin'];
        this.options.face = data['face'];
        this.options.graphic = data['graphic'];
      }
    });
  }

  getEnumTupple(enumRef: any): Array<any> {
    return Object.keys(enumRef).map(key => {
      return enumRef[key];

    });

  }

  getRandom() {
    this.options = new Options();

    this.options.getRandom();
    this.avatarForm.patchValue({
      'avatarStyle': this.options.style,
      'top': this.options.top,
      'accessories': this.options.accessories,
      'hairColor': this.options.hairColor,
      'hatColor': this.options.hatColor,
      'facialHair': this.options.facialHair,
      'facialHairColor': this.options.facialHairColor,
      'clothes': this.options.clothes,
      'colorFabric': this.options.clothColor,
      'eyes': this.options.eyes,
      'eyebrow': this.options.eyebrow,
      'mouth': this.options.mouth,
      'skin': this.options.skin,
      'face': this.options.face,
      'graphic': this.options.graphic,
    });

    this.router.navigate([], {
      queryParams: {
        avatarStyle: this.options.style,
        top: this.options.top,
        accessories: this.options.accessories,
        hairColor: this.options.hairColor,
        hatColor: this.options.hatColor,
        facialHair: this.options.facialHair,
        facialHairColor: this.options.facialHairColor,
        clothes: this.options.clothes,
        colorFabric: this.options.clothColor,
        eyes: this.options.eyes,
        eyebrow: this.options.eyebrow,
        mouth: this.options.mouth,
        skin: this.options.skin,
        face: this.options.face,
        graphic: this.options.graphic,
      }
    });

  }


  toggleAngular(bool) {
    if(bool){
      this.showAngular = !this.showAngular;
      this.showImage = false;
      this.showSvg = false;
    }
    var jsonString = JSON.stringify(this.options,null,' ');

    jsonString = jsonString.replace(/[{}]/g, '');
    jsonString = jsonString.replace(/[:]/g, ' =');
    jsonString = jsonString.replace(/[      ]/g, '');
    jsonString = jsonString.replace(/[""]/g, '');

    this.angularCode = "<app-avatar " +jsonString + "></app-avatar>";
    
  }

  toggleImage() {
    this.showImage = !this.showImage;
    this.showAngular = false;
    this.showSvg = false;
    this.toggleSvg(false);
  }
  toggleSvg(bool) {
    if(bool) {
      this.showSvg = !this.showSvg;
      this.showAngular = false;
      this.showImage = false;
    }
    const svgNode = document.getElementById('svgid');
    this.svgData = svgNode.innerHTML;
    // console.log(this.svgData)
  }

  downloadSvg() {
    const svgNode = document.getElementById('svgid');
    const data = svgNode.innerHTML;
    const svg = new Blob([data], {type: 'image/svg+xml'});
    saveAs(svg, 'avatar.svg');
  }

  copyText(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  public onDownloadPNG = () => {
    const svgNode = document.getElementById('svgid');
    const canvas = document.getElementById('canvasRef') as HTMLCanvasElement;
    canvas.width = 132;
    canvas.height = 140;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const anyWindow = window as any;
    const DOMURL = anyWindow.URL || anyWindow.webkitURL || window;
    const data = svgNode.innerHTML;
    const svg = new Blob([data], {type: 'image/svg+xml'});
    const img = new Image(canvas.width, canvas.height);
    const url = DOMURL.createObjectURL(svg);
    img.onload = () => {
      ctx.save();
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.restore();
      DOMURL.revokeObjectURL(url);
      canvas.toBlob(imageBlob => {
        this.triggerDownload(imageBlob, 'avataaars.png');
      });
    };
    img.src = url;
  };


  private triggerDownload(imageBlob: Blob, fileName: string) {
    saveAs(imageBlob, fileName);
  }
}