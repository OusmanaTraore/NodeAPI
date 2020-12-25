import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Array<any> = [];

  // tslint:disable-next-line: typedef
  onNewCourse() {
    this.courses = [{ name: 'Paris' }, { name: 'Lyon' }, { name: 'Marseille' }];
  }
  constructor() {}

  ngOnInit(): void {}
}
