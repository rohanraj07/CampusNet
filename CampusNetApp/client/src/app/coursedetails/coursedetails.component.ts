import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {MomentModule} from 'angular2-moment/moment.module';

import { CourseService } from '../_services/index';
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})

export class CoursedetailsComponent implements OnInit {
  order: string;
  lastUpdated :Date;

  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe((params: Params) => {

      this.courseService.getById(params['id']).subscribe(
        data => {
          console.log(data);
        },
        error => {

        });
    });

    this.lastUpdated = new Date();
  }

  ngOnInit() { }

}
