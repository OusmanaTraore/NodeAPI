import { Component } from '@angular/core';
// import { CourseService } from './services/course.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // IS_PROD = false;
  // title = 'poneycourse';
  numberOfUsers = 36;
  pangolin: any = {
    name: 'mignon',
  };
  constructor(title: Title) {
    title.setTitle('Course de poney - Venez participer!');
  }

  // list(): void {
  //   const test = this.courseService.list();
  //   console.log(test);
  // }
}
