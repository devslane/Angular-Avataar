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
 
  getRandom()
  {
    this.options.getRandom();
  }
}
