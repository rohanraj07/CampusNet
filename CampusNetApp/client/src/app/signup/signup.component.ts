import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, UserService } from '../_services/index';

import { User } from '../_models/user';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    model: any = {};
    test: Date = new Date();
    loading = false;

    majors = ['Computer Engineering', 'Computer Science', 'Mechanical Engineering', 'Plastics Engineering'];


    itemList = [
       { "id": 1, "itemName": "Internet and Web Systems", "category": "Computer Science" },
       { "id": 2, "itemName": "Human Computer Interaction", "category": "Computer Science" },
       { "id": 3, "itemName": "Operating Systems", "category": "Computer Engineering" },
       { "id": 4, "itemName": "Networking Systems", "category": "Computer Engineering" },
       { "id": 5, "itemName": "Chemistry", "category": "Plastics Engineering" },
       { "id": 6, "itemName": "Robotics", "category": "Mechanical Engineering" }
   ];
    prevselectedItems = [];
    currentselectedItems = [];
    settings = {};

    user = new User();

    prevCourses: string[] = [];
    currentCourses: string[] = [];
    userForm: FormGroup;



    constructor(private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private fb: FormBuilder) {
        this.createForm();
    }


    createForm() {
        this.userForm = this.fb.group({
            name: '',
            email: ['', Validators.required],
            prevcourses: [[], Validators.required],
            currentcourses: [[], Validators.required]
        });
    }

    submitForm() {
        console.log(this.userForm);
    }



    ngOnInit() {
        this.settings = {
            text: "Select Fields",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            searchPlaceholderText: 'Search Fields',
            enableSearchFilter: true,
            badgeShowLimit: 4,
            groupBy: "category"
        };
    }

    onItemSelect(item: any) {
        //console.log(item);
        //console.log(this.selectedItems);
    }
    OnItemDeSelect(item: any) {
        //console.log(item);
        //console.log(this.selectedItems);
    }
    onSelectAll(items: any) {
        //console.log(items);
    }
    onDeSelectAll(items: any) {
        //console.log(items);
    }
    showModel() {
        //console.log(this.selectedItems);
    }
    changeData() {
        this.prevselectedItems = [];
    }

    onItemSelect1(item1: any) {
        //console.log(item);
        //console.log(this.selectedItems);
    }
    OnItemDeSelect1(item1: any) {
        //console.log(item);
        //console.log(this.selectedItems);
    }
    onSelectAll1(items1: any) {
        //console.log(items);
    }
    onDeSelectAll1(items1: any) {
        //console.log(items);
    }
    showModel1() {
        //console.log(this.selectedItems);
    }
    changeData1() {
        this.currentselectedItems = [];
    }


    register() {
        this.loading = false;
        
        for (let result of this.prevselectedItems) {
            this.prevCourses.push(result.id);
        }

        this.model.prevcourses = this.prevCourses;

        for (let result1 of this.currentselectedItems) {
            this.currentCourses.push(result1.id);
        }

        this.model.currentcourses = this.currentCourses;


        console.log(this.model);

        this.userService.create(this.model)
            .subscribe(
            data => {
                console.log(data.json());

                if (data.json().success === true) {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/landing']);
                } else {
                    this.alertService.error('Username Already exist', true);
                    //this.router.navigate(['/landing']);
                }

            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

}
