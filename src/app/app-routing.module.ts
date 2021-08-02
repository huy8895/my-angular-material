import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'schematics',
    loadChildren: () => import('./schematics/schematics.module').then(m => m.SchematicsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
