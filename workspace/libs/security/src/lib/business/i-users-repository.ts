import { Observable } from 'rxjs';
import { ApiResponse } from '@ngx-architecture/foundation';

export interface IUsersRepository {
  retrieveLatestCourses<T>(): Observable<ApiResponse<T>>;
}
