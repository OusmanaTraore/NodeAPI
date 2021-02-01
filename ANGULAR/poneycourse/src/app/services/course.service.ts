import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(public apiService: ApiService) {}

  list(): void {
    return this.apiService.get(
      '/poneycourse/src/app/courses/courses.component.html'
    );
  }
}
export class FakeCourseService {
  // tslint:disable-next-line: typedef
  list() {
    return [{ name: 'London' }];
  }
}
