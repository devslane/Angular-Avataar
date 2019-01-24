import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Avtaar-Generator';
  avatarForm: FormGroup;

  ngOnInit(){
    this.avatarForm = new FormGroup ({
      'avatarStyle': new FormControl(''),
      'top': new FormControl(''),
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
    })
  }
  
}
