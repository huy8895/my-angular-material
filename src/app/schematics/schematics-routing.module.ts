import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SchematicsComponent} from "./schematics.component";
import {AddressFormComponent} from "./address-form/address-form.component";
import {NavigationComponent} from "./navigation/navigation.component";

const routes: Routes = [
  {
    path: '',
    component: SchematicsComponent,
    children: [
      {
        path: 'address-form',
        component: AddressFormComponent
      },
      {
        path: 'navigation',
        component: NavigationComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchematicsRoutingModule { }
