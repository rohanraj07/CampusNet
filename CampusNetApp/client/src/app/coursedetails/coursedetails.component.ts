import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MomentModule } from 'angular2-moment/moment.module';

import { CourseService } from '../_services/index';

import { Course } from '../_models/course';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})

export class CoursedetailsComponent implements OnInit {

  course = new Course();

   commentStr={
        date:String,
        user:String,
        comment:String
      }
      result:any;
      comments = [];
      jsonResult :any;

  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router) {

    this.route.queryParams.subscribe((params: Params) => {
     
      this.courseService.getById(params['id']).subscribe(
        
        data => {
          console.log(data);
          this.course = data;
          
          console.log();
        },
        error => {

        });
    });
  }

  ngOnInit() { }

  timeDifference(current, previous) {
    
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - previous;
        
        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + " seconds ago";   
        }
    
        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + " minutes ago";   
        }
    
        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + " hours ago";   
        }
    
        else if (elapsed < msPerMonth) {
            return "approximately " + Math.round(elapsed/msPerDay) + " days ago";   
        }
    
        else if (elapsed < msPerYear) {
            return "approximately " + Math.round(elapsed/msPerMonth) + " months ago";   
        }
    
        else {
            return "approximately " + Math.round(elapsed/msPerYear ) + " years ago";   
        }
    }

}
