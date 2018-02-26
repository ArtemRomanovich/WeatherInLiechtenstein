import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import {MaterialModule} from './material.module';


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
