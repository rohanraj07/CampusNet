import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {LoginService} from './services/loginServices/login.service';


@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[TaskService, LoginService]
})

export class AppComponent { }
