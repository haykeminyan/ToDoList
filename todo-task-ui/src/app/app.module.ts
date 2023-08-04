import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {ListTaskComponent} from "./components/list-task/list-task.component";
import {AppRoutingModule} from "./app-routing.module";
import {ViewTaskComponent} from "./components/view-task/view-task.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import {AddTaskComponent} from "./components/add-task/add-task.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    ViewTaskComponent,
    EditTaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
