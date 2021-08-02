import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SchematicsComponent} from "./schematics.component";
import {AddressFormComponent} from "./address-form/address-form.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {TableComponent} from "./table/table.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TreeComponent} from "./tree/tree.component";
import {DragDropComponent} from "./drag-drop/drag-drop.component";

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
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
      ,
      {
        path: 'tree',
        component: TreeComponent
      },
      {
        path: 'drag-drop',
        component: DragDropComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchematicsRoutingModule { }
