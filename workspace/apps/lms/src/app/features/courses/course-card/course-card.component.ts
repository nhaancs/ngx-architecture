import { Component, OnInit, Input } from '@angular/core';
import { Course } from '@ngx-architecture/lms-common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ComponentBase } from '@ngx-architecture/foundation';
import { LoggingService, Severity } from '@ngx-architecture/logging';
import { Router } from '@angular/router';

@Component({
  selector: 'lms-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent extends ComponentBase implements OnInit {
  @Input() course: Course;
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, loggingService: LoggingService, router: Router) {
    super('CourseCardComponent', loggingService, router);
  }

  ngOnInit() {}
}
