import { Injectable } from '@angular/core';


import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
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

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerResponse implements HttpInterceptor {
  constructor(private status: HttpStatus, private router: Router, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status) {
          switch (err.status) {
            case 403:
              this.router.navigate(['/dashboard']);
              break;
            case 401:
              this.authService.logoutUser();
              this.router.navigate(['login']);
              break;
            }
        }
      }
    }));
  }
}
