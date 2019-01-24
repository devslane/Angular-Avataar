import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Options} from './services/main.services';
import {Top} from './enums/tops.enum';

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
  topArray: Array<any>;

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
}
