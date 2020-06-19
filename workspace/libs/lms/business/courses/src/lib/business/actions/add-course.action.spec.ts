import { AddCourseAction } from './add-course.action';
import { Course } from '@ngx-architecture/lms-common';

describe('AddCourseAction', () => {
  it('should create an instance', () => {
    expect(new AddCourseAction(new Course())).toBeTruthy();
  });
});
