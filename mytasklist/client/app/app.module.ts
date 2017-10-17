import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {TaskComponent} from './components/task/task.component';
import {LoginComponent} from './components/login/login.component';
import { FormsModule } from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';

import {AuthService} from './services/auth.service';

import {APP_BASE_HREF} from '@angular/common';

const appRoutes: Routes =  [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent}
]

@NgModule({
  imports:[ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations:[AppComponent, TaskComponent, LoginComponent],
  bootstrap: [AppComponent],
  providers:[AuthService, {provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule { }
