import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@ngx-architecture/foundation';
import { LoggingService, Severity } from '@ngx-architecture/logging';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesUIService } from '../courses-ui.service';
import { Observable } from 'rxjs';
import { Video } from '@ngx-architecture/lms-common';

@Component({
  selector: 'lms-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent extends ComponentBase implements OnInit {
  videoId: string;
  public readonly showVideo$: Observable<boolean> = this.uiService.showCourse$.asObservable();
  video: Video;

  constructor(
    private route: ActivatedRoute,
    private uiService: CoursesUIService,
    loggingService: LoggingService,
    router: Router
  ) {
    super('VideoComponent', loggingService, router);
  }

  ngOnInit() {}
}
