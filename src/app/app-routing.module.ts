import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Park/add/add.component';
import { ListComponent } from './Park/list/list.component';

const routes: Routes = [
  { path: 'list', component:ListComponent },
  { path: 'add', component:AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
