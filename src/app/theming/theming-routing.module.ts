import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThemingComponent} from "./theming.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";

const routes: Routes = [
  {
    path: '',
    component: ThemingComponent,
    children: [
      {
        path: 'toolbar',
        component: ToolbarComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemingRoutingModule { }
