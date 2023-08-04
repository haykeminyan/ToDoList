import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {ListTaskComponent} from "./components/list-task/list-task.component";
import {AppRoutingModule} from "./app-routing.module";
import {ViewTaskComponent} from "./components/view-task/view-task.component";

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
