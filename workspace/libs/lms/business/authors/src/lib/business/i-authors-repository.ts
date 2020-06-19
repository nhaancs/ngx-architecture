import { Observable } from 'rxjs';
import { ApiResponse } from '@ngx-architecture/foundation';

export interface IAuthorsRepository {
  retrieveLatestCourses<T>(): Observable<ApiResponse<T>>;
}
