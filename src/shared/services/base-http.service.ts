import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class BaseHttpService {
  handleError(err: any): Observable<never> {
    return throwError(err);
  }

  handleRequest<T = any>(requestObservable: Observable<T>): Observable<T> {
    return requestObservable.pipe(catchError((error) => this.handleError(error)));
  }
}
