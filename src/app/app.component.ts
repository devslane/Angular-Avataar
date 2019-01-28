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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  avatarForm: FormGroup;
  options: Options;
  private canvasRef: HTMLCanvasElement;


  accessoriesArray: Array<any>;
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
  public image: any;


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
      console.log(value);
      this.options = value;
    });


    this.tops = this.getEnumTupple(Top);
    this.facialHair = this.getEnumTupple(FacialHair);
    this.clothe = this.getEnumTupple(Cloth);
    this.eyes = this.getEnumTupple(Eyes);
    this.eyebrow = this.getEnumTupple(Eyebrow);
    this.mouth = this.getEnumTupple(Mouth);
    this.skin = this.getEnumTupple(Skin);
    this.accessoriesArray = this.getEnumTupple(Accessories);
    this.clothColor = this.getEnumTupple(ClothColor);
    this.face = this.getEnumTupple(Face);
    this.facialHairColor = this.getEnumTupple(FacialHairColor);
    this.graphic = this.getEnumTupple(Graphic);
    this.hatColor = this.getEnumTupple(HatColor);
    this.hairColor = this.getEnumTupple(HairColor);
    this.avatarStyle = this.getEnumTupple(AvatarStyle);


  }

  getEnumTupple(enumRef: any): Array<any> {
    return Object.keys(enumRef).filter(k => !isNaN(+k)).map(key => {
      return {
        key: key,
        value: enumRef[key]
      };
    });

  }

  getRandom() {
    this.options = new Options();
    this.options.getRandom();
  }

  public onDownloadPNG = () => {
    const svgNode = document.getElementById('this.avatarRef');
    const canvas = document.getElementById('canvasRef') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const anyWindow = window as any;
    const DOMURL = anyWindow.URL || anyWindow.webkitURL || window;

    const data = svgNode.outerHTML;
    const img = new Image();
    const svg = new Blob([data], {type: 'image/svg+xml'});
    const url = DOMURL.createObjectURL(svg);

    img.onload = () => {
      ctx.save();
      ctx.scale(2, 2);
      ctx.drawImage(img, 0, 0);
      ctx.restore();
      DOMURL.revokeObjectURL(url);
      this.canvasRef.toBlob(imageBlob => {
        this.triggerDownload(imageBlob, 'avataaars.png');
      });
    };
    img.src = url;
  };

  private triggerDownload(imageBlob: Blob, fileName: string) {
    FileSaver.saveAs(imageBlob, fileName);
  }
}
