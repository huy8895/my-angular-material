import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchematicsRoutingModule } from './schematics-routing.module';
import { AddressFormComponent } from './address-form/address-form.component';


@NgModule({
  declarations: [
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    SchematicsRoutingModule
  ]
})
export class SchematicsModule { }
