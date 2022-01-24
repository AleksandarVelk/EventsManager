import { Injectable } from '@angular/core';


import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { BehaviorSubject, catchError, finalize, map, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class HttpStatus {
  private requestInFlight: BehaviorSubject<boolean>;
  constructor() {
    this.requestInFlight = new BehaviorSubject(false);
    
  }

  setHttpStatus(inFlight: boolean) {
    return this.requestInFlight.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInFlight.asObservable();
  }
}

@Injectable()
export class HttpListener implements HttpInterceptor {
    constructor(private status: HttpStatus,private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        return next.handle(request).pipe(
          map(event => {
            this.status.setHttpStatus(true);
            return event;
          }),
          catchError(error => {
            this.authService.logoutUser();
            return throwError(error);
          }),
          finalize(() => {
            this.status.setHttpStatus(false);
          })
        );;
    }
}