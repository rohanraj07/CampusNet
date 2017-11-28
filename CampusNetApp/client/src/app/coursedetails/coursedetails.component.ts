import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MomentModule } from 'angular2-moment/moment.module';

import { CourseService } from '../_services/index';
import { UserService } from '../_services/index';


import { Course } from '../_models/course';
import { ComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})

export class CoursedetailsComponent implements OnInit {

  course: any = new Course();
  commentStr: any;

  public counter: number = 0;

  constructor(private courseService: CourseService, private userService :UserService,
    private route: ActivatedRoute,
    private router: Router) {

    this.route.queryParams.subscribe((params: Params) => {

      this.courseService.getById(params['id']).subscribe(

        data => {
          //console.log(data);
          this.course = data;

          for (let entry of this.course.comments) {
            //console.log(entry); // 1, "string", false
            this.course.comments[this.counter].date = this.timeDifference(new Date(), new Date(entry.date));
            this.counter = this.counter + 1;
          }

          //console.log(this.course);
        },
        error => {

        });
    });
  }

  getUserDetails(userCourse){
    console.log(userCourse.userCourseId);
    this.userService.getById(userCourse.userCourseId).subscribe(
      
              data => {
                console.log(data);
                
              },
              error => {
      
              });
  }

  comment() {

    function CommentJson(user, comment, date) {
      this.user = user;
      this.comment = comment;
      this.date = date;
    }

    var commentJson = new CommentJson(JSON.parse(localStorage.getItem('currentUser')).user.username, this.commentStr, new Date());

    this.course.comments.push(JSON.parse(JSON.stringify(commentJson)));

    this.courseService.addComment(this.course).subscribe(

      data => {
        this.course = data;

        for (let entry of this.course.comments) {

          this.course.comments[this.counter].date = this.timeDifference(new Date(), new Date(entry.date));
          this.counter = this.counter + 1;
        }


      },
      error => {

      });
    /* if(this.course.comments.length -1 > 0){
      this.course.comments[this.course.comments.length -1].user = commentJson.user;
      this.course.comments[this.course.comments.length -1 ].comment = commentJson.comment;
      this.course.comments[this.course.comments.length -1].date = commentJson.date;
     
      this.courseService.addComment(this.course).subscribe(
  
        data => {
          this.course = data;
  
          for (let entry of this.course.comments) {
            
            this.course.comments[this.counter].date = this.timeDifference(new Date(), new Date(entry.date));
            this.counter = this.counter + 1;
          }
  
         
        },
        error => {
  
        });
    } */

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
      return Math.round(elapsed / 1000) + " seconds ago";
    }

    else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    }

    else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    }

    else if (elapsed < msPerMonth) {
      return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
    }

    else if (elapsed < msPerYear) {
      return "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
    }

    else {
      return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
    }
  }

}
