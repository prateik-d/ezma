import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = environment.baseUrl;
  errorData: {};
  redirectUrl: string;

  constructor(private http: HttpClient) { }

  login(data) {
    
    return this.http.post<any>(this.serverUrl + 'api/user-login', data)
      .pipe(
        catchError(this.handleError)
      );
  }

  signup(data) {
    
    return this.http.post<any>(this.serverUrl + 'api/user-signup', data)
      .pipe(
        catchError(this.handleError)
      );
  }

  get_data(email) {

    var url = this.serverUrl + 'api/profile/' + email;
    
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  get_info_by_id(id) {

    // console.log(id);

    var url = this.serverUrl + 'api/profile_by_id/' + id;
    
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  get_info()
  {
    var url = this.serverUrl + 'api/user-extra-info/' ;
    
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  setup_profile(data)
  {

    // console.log(data);

    return this.http.post<any>(this.serverUrl + 'api/setup-profile', data)
      .pipe(
        catchError(this.handleError)
      );
  }

  uplod_dp(data)
  {

    // console.log(data);

    return this.http.post<any>(this.serverUrl + 'api/uplod-dp', data)
      .pipe(
        catchError(this.handleError)
      );
  }




  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

}
