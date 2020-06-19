import { Observable } from 'rxjs';
import { ApiResponse } from '@ngx-architecture/foundation';

export interface ICoursesRepository {
  retrieveLatestCourses<T>(): Observable<ApiResponse<T>>;
}
