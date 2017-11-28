import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

import { AuthGuard } from './_guards/index';
import { ChatComponent } from 'app/chat/chat.component';
import { ChartsComponent } from 'app/charts/charts.component';
const routes: Routes =[
    { path: 'home',             component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'signup',           component: SignupComponent},
    { path: 'login',            component: LoginComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'course-net',            component: AboutComponent , canActivate: [AuthGuard] },
    { path: 'course-details',    component: CoursedetailsComponent , canActivate: [AuthGuard] },
    { path: 'chat',    component: ChatComponent , canActivate: [AuthGuard] },
    {path: 'profile',  component: ProfileComponent, canActivate: [AuthGuard] },
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'charts',    component: ChartsComponent , canActivate: [AuthGuard] }


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
