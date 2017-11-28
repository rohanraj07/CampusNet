import { Component, OnInit } from '@angular/core';
import { AlertService, CourseService } from '../_services/index';
import { Ng2SmartTableModule, LocalDataSource  } from 'ng2-smart-table';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data  = [];
  model: any = {};
  source: LocalDataSource;  
  currentRow = event;
  majors = ['Select major','Computer_Engineering', 'Computer_Science', 'Mechanical_Engineering', 'PlasticsEngineering'];
  sems = ['Select Semester','Fall_2017','Fall_2018','Spring_2017','Spring_2016'];

  test:any = {_id: 3, courseName: "Course_Name_3", courseInstructor: "Course_Instructor_3", courseSem: "Fall_2017", courseCode: "Code_3"};
  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      
      courseName: {
        title: 'courseName'
      },
      courseInstructor: {
        title: 'courseInstructor'
      },
      courseSem: {
        title: 'courseSem'
      }
    }
  };

  constructor(private courseService: CourseService,
    
    private alertService: AlertService) {
      this.source = new LocalDataSource();
     }

  ngOnInit() {
  }

  search() {
    this.courseService.getCoursesMajorSem(this.model)
      .subscribe(
      data => {
        console.log("----------------------------------------");
        this.data = data.json();
        console.log(this.data);
      },
      error => {
        this.alertService.error(error);
      });
  }

  onCustom(event) {
    alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`)
  }

}
