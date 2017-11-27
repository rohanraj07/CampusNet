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

const routes: Routes =[
    { path: 'home',             component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'user-profile',     component: ProfileComponent , canActivate: [AuthGuard] },
    { path: 'signup',           component: SignupComponent},
    { path: 'login',            component: LoginComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'about',            component: AboutComponent , canActivate: [AuthGuard] },
    { path: 'course-details',    component: CoursedetailsComponent , canActivate: [AuthGuard] },
    
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
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
