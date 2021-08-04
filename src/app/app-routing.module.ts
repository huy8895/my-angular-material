import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'schematics',
    loadChildren: () => import('./schematics/schematics.module').then(m => m.SchematicsModule)
  },
  {
    path: 'theming',
    loadChildren: () => import('./theming/theming.module').then(m => m.ThemingModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
