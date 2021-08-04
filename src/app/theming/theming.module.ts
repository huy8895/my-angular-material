import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemingRoutingModule } from './theming-routing.module';
import { ThemingComponent } from './theming.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    ThemingComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ThemingRoutingModule,
    MaterialModule
  ]
})
export class ThemingModule { }
