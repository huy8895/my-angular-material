import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSliderModule } from '@angular/material/slider'
import {MySchematicsModule} from "./my-schematics/my-schematics.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MySchematicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
