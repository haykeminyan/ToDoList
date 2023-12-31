import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewTaskComponent} from "./components/view-task/view-task.component";
import {ListTaskComponent} from "./components/list-task/list-task.component";
import {AddTaskComponent} from "./components/add-task/add-task.component";
// import { FactureListComponent } from './components/facture-list/facture-list.component';

const routes: Routes = [
  { path: '', component: ListTaskComponent},
  { path: 'details', component: ViewTaskComponent},
  { path: 'add', component: AddTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
