import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  base_url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  public login(payload: any) {
    return this.http
      .post(this.base_url + 'login', payload)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.error.err.message || 'Server error');
  }
}
