import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { ToasterService, ToasterConfig, Toast } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Injectable()
export class AlertService {
   private subject = new Subject<any>();
   private keepAfterNavigationChange = false;
   private toasterService: ToasterService;

   constructor(private router: Router, toasterService: ToasterService) {
       // clear alert message on route change

       this.toasterService = toasterService;
       router.events.subscribe(event => {
           if (event instanceof NavigationStart) {
               if (this.keepAfterNavigationChange) {
                   // only keep for a single location change
                   this.keepAfterNavigationChange = false;
               } else {
                   // clear alert
                   this.subject.next();
               }
           }
       });
   }

   success(message: string, keepAfterNavigationChange = false) {
       this.keepAfterNavigationChange = keepAfterNavigationChange;
       // this.subject.next({ type: 'success', text: message });
       this.popToastsuccess(message);
   }

   error(message: string, keepAfterNavigationChange = false) {
       /// this.keepAfterNavigationChange = keepAfterNavigationChange;
       this.popToasterror(message);
       //this.subject.next({ type: 'error', text: message });
   }

   getMessage(): Observable<any> {
       return this.subject.asObservable();
   }

   popToasterror(message) {
       var toast: Toast = {
           type: 'error',
           title: message,
           body: message,
       };
       /* this.toasterService.clear(toast.toastId, toast.toastContainerId); */
       this.toasterService.pop(toast);
   }
   popToastsuccess(message) {
       var toast: Toast = {
           type: 'success',
           title: message,
           body: message,
       };
       /* this.toasterService.clear(toast.toastId, toast.toastContainerId); */
       this.toasterService.pop(toast);
   }
}