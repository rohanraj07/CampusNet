import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService, ToasterConfig} from 'angular2-toaster';

import { HomeModule } from './home/home.module';

import { HttpModule } from '@angular/http';

import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, CourseService, ChatService } from './_services/index';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AboutComponent } from './about/about.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { ChatComponent } from './chat/chat.component';
import { ChartsComponent } from './charts/charts.component';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    AlertComponent,
    AboutComponent,
    CoursedetailsComponent,
    ChatComponent,
    ChartsComponent,
  

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    ToasterModule,
    BrowserAnimationsModule,
    AngularMultiSelectModule,
    ReactiveFormsModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)
    
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    CourseService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
