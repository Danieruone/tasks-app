import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  isLogged: boolean = false;
  userID!: string;
  token!: string;
  base_url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  public login(payload: any) {
    return this.http
      .post(this.base_url + 'login', payload)
      .pipe(catchError(this.handleError));
  }

  public getTasks() {
    const headers = { Authorization: this.token };
    return this.http
      .get(this.base_url + 'task', { headers })
      .pipe(catchError(this.handleError));
  }

  public postTask(payload: any) {
    const headers = { Authorization: this.token };
    return this.http
      .post(this.base_url + 'task', payload, { headers })
      .pipe(catchError(this.handleError));
  }

  public editTask(payload: any, taskID: string) {
    const headers = { Authorization: this.token };
    return this.http
      .put(this.base_url + 'task/' + taskID, payload, { headers })
      .pipe(catchError(this.handleError));
  }

  public deleteTask(taskID: string) {
    const headers = { Authorization: this.token };
    return this.http
      .delete(this.base_url + 'task/' + taskID, { headers })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.error.err.message || 'Server error');
  }
}
