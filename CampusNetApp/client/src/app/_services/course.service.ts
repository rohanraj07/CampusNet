import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Course } from '../_models/index';

@Injectable()
export class CourseService {

  constructor(private http: Http) { }

  getById(_id: string) {
    return this.http.get('/course/getCourseById/' + _id).map((response: Response) => response.json());
  }

  getCoursesMajorSem(model) {
    return this.http.post('/course/search-course-by-major-sem', model);
  }

  addComment(course: Course) {
    return this.http.post('/course/addcomment', course);
  }

  getall() {
    return this.http.get('/course/allcourses').map((response: Response) => response.json());
  }
}
