import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PoneyComponent } from './poney/poney.component';
import { CourseService, FakeCourseService } from './services/course.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [AppComponent, CoursesComponent, PoneyComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    ApiService,
    {
      provide: CourseService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// useClass: IS_PROD ? CourseService : FakeCourseService,
// {provide: 'CourseServiceToken', useClass: CourseService },
