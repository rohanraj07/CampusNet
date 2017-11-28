import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/_services';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  dataSource: Object;
  pie_data: Array<any> = [];
  constructor(private courseService: CourseService) {
  this.dataSource = {
    chart: {},
    data: [
    ]
  }}

  ngOnInit() {

      this.courseService.getall().subscribe(
      
              data => {
                for (let course of data) {
                  this.pie_data.push({name:course.courseName, value: course.courseUsers.length})
                }
                this.dataSource['data'] = this.pie_data;
                //console.log(this.course);
              },
              error => {
      
              });
  }

}
