import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@ngx-architecture/foundation';
import { LoggingService } from '@ngx-architecture/logging';
import { Router } from '@angular/router';
import { CoursesUIService } from '../courses-ui.service';
import { Observable } from 'rxjs';

import { Course } from '@ngx-architecture/lms-common';

@Component({
  selector: 'lms-latest-courses',
  templateUrl: './latest-courses.component.html',
  styleUrls: ['./latest-courses.component.css'],
})
export class LatestCoursesComponent extends ComponentBase implements OnInit {
  public readonly latestCourses$: Observable<
    Course[]
  > = this.uiService.latestCourses$.asObservable();
  public readonly showCourses$: Observable<boolean> = this.uiService.showCourses$.asObservable();

  constructor(
    private uiService: CoursesUIService,
    loggingService: LoggingService,
    router: Router
  ) {
    super('LatestCoursesComponent', loggingService, router);
  }

  ngOnInit() {}
}
