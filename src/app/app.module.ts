import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AvtaarComponent} from './avtaar/avtaar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainServices} from './services/main.services';
import {TopsServices} from './services/tops.services';
import {FaceServices} from './services/face.services';
import {ColorsServices} from './services/colors.services';
import {AccessoriesServices} from './services/accessories.services';
import {ClothesServices} from './services/clothes.services';

@NgModule({
  declarations: [
    AppComponent,
    AvtaarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    MainServices,
    TopsServices,
    FaceServices,
    ColorsServices,
    AccessoriesServices,
    ClothesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
