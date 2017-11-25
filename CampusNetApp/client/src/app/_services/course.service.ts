import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Course } from '../_models/index';

@Injectable()
export class CourseService {

  constructor(private http: Http) { }

  getCoursesMajorSem(model){
    return this.http.post('/course/search-course-by-major-sem', model);
  }
}
