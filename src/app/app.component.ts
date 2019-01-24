import { HairColor } from './enums/hair-color.enum';
import { HatColor } from './enums/hat-color.enum';
import { Accessories } from './enums/accessories.enum';
import { Mouth } from './enums/mouth.enum';
import { Eyebrow } from './enums/eyebrow.enum';
import { ClothColor } from './enums/cloth-color.enum';
import { Cloth } from './enums/clothe.enum';
import { FacialHairColor } from './enums/facial-hair-color.enum';
import { FacialHair } from './enums/facial-hair.enum';
import { AvatarStyle } from './enums/avatar-style.enum';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Options} from './services/main.services';
import {Top} from './enums/tops.enum';
import { Eyes } from './enums/eyes.enum';
import { Skin } from './enums/skin.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Avtaar-Generator';
  avatarForm: FormGroup;
  options: Options;

  top = Top;
  accessories = Accessories;
  hatColor = HatColor;
  facialHair = FacialHair;
  facialHairColor = FacialHairColor;
  cloth = Cloth;
  clothColor = ClothColor
  eyes = Eyes;
  eyebrow = Eyebrow;
  mouth = Mouth;
  skin = Skin;
  hairColor = HairColor;



  topArray: Array<any>;
  random: Options;
  ngOnInit() {
    this.options = new Options();
    this.avatarForm = new FormGroup({
      'avatarStyle': new FormControl(this.options.style),
      'top': new FormControl(this.options.top),
      'accessories': new FormControl(''),
      'hairColor': new FormControl(''),
      'facialHair': new FormControl(''),
      'facialHairColor': new FormControl(''),
      'clothes': new FormControl(''),
      'colorFabric': new FormControl(''),
      'eyes': new FormControl(''),
      'eyebrow': new FormControl(''),
      'mouth': new FormControl(''),
      'skin': new FormControl(''),
    });

    this.avatarForm.valueChanges.subscribe(value => {
      console.log(value);
    console.log(this.options.top);

    });
    

    this.topArray = this.getEnumTupple(Top);

  }

  getEnumTupple(enumRef: any): Array<any> {
    return Object.keys(enumRef).map(key => {
      return {
        key: key,
        value: enumRef[key]
      };
    });
  }
  getRandom() {
    var len_top = (Object.keys(this.top).length/2)-1;
    var item = (Math.floor(Math.random() * len_top) + 0); 
    this.options.top = item;

    var len_accessories = (Object.keys(this.accessories).length/2)-1;
    var item_accessories = (Math.floor(Math.random() * len_accessories) + 0); 
    this.options.accessories = item_accessories;

    var len_hatcolor = (Object.keys(this.hatColor).length/2)-1;
    var item_hatcolor = (Math.floor(Math.random() * len_hatcolor) + 0); 
    this.options.hatColor = item_hatcolor;

    var len_facialHair = (Object.keys(this.facialHair).length/2)-1;
    var item_facialHair = (Math.floor(Math.random() * len_facialHair) + 0); 
    this.options.facialHair = item_facialHair;

    var len_facialHairColor = (Object.keys(this.facialHairColor).length/2)-1;
    var item_facialHairColor = (Math.floor(Math.random() * len_facialHairColor) + 0); 
    this.options.facialHairColor = item_facialHairColor;

    var len_cloth = (Object.keys(this.cloth).length/2)-1;
    var item_cloth = (Math.floor(Math.random() * len_cloth) + 0); 
    this.options.clothes = item_cloth;

    var len_clothColor = (Object.keys(this.clothColor).length/2)-1;
    var item_clothColor = (Math.floor(Math.random() * len_clothColor) + 0); 
    this.options.clothColor = item_clothColor;

    var len_eyebrow = (Object.keys(this.eyebrow).length/2)-1;
    var item_eyebrow = (Math.floor(Math.random() * len_eyebrow) + 0); 
    this.options.eyebrow = item_eyebrow;

    var len_eyes = (Object.keys(this.eyes).length/2)-1;
    var item_eyes = (Math.floor(Math.random() * len_eyes) + 0); 
    this.options.eyes = item_eyes;

    var len_mouth = (Object.keys(this.mouth).length/2)-1;
    var item_mouth = (Math.floor(Math.random() * len_mouth) + 0); 
    this.options.mouth = item_mouth;

    var len_skin = (Object.keys(this.skin).length/2)-1;
    var item_skin = (Math.floor(Math.random() * len_skin) + 0); 
    this.options.skin = item_skin;

    var len_hairColor = (Object.keys(this.hairColor).length/2)-1;
    var item_hairColor = (Math.floor(Math.random() * len_hairColor) + 0); 
    this.options.hairColor = item_hairColor;

    
  }
}
