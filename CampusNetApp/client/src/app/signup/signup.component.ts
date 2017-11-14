import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    model: any = {};
    test : Date = new Date();
    loading = false;

    constructor(private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {}

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/landing']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
