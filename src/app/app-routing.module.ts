import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'schematics',
    loadChildren: () => import('./my-schematics/my-schematics.module').then(m => m.MySchematicsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
