import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserListingService {

  serverUrl = environment.baseUrl;
  errorData: {};
  redirectUrl: string;

  constructor(private http: HttpClient) { }

 

  get_list(data) {
    // console.log(data);
    
    return this.http.post<any>(this.serverUrl + 'api/user-list', data)
      .pipe(
        catchError(this.handleError)
      );
  }

  connect(data)
  {
    return this.http.post<any>(this.serverUrl + 'api/connect', data)
      .pipe(
        catchError(this.handleError)
      );
  }

  get_connect_request(data)
  {

    // console.log(this.serverUrl + 'api/connect-request');

    return this.http.post<any>(this.serverUrl + 'api/connect-request', data)
      .pipe(
        catchError(this.handleError)
      );
  }

  // get_connect_request(id) {

  //   var url = this.serverUrl + 'api/connect-request/' + id;
    
  //   return this.http.get<any>(url)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

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
