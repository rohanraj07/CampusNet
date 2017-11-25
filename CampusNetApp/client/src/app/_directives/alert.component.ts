import { Component, OnInit } from '@angular/core';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';

import { AlertService } from '../_services/index';

@Component({
   moduleId: module.id,
   selector: 'alert',
   templateUrl: 'alert.component.html'
})

export class AlertComponent {
   message: any;

   public config1: ToasterConfig = new ToasterConfig({
       positionClass: 'toast-top-right',
       animation: 'flyRight',
       tapToDismiss: false,
       showCloseButton: true,
       newestOnTop: false,
       timeout: 10000
   });

   constructor(private alertService: AlertService) { }

   ngOnInit() {
       this.alertService.getMessage().subscribe(message => { this.message = message; });
   }
}