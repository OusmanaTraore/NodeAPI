import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CourseServiceWithHttp {
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get('/poneycourse/src/app/courses');
  }
}
export class FakeCourseService {
  // tslint:disable-next-line: typedef
  list() {
    return [{ name: 'London' }];
  }
}
