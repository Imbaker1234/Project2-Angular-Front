import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DontForgetYourJWTService implements HttpInterceptor {

  constructor(public auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({

      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    console.log('DontForgetYourJWTService attached a token\n\n' + this.auth.getToken());
    return next.handle(request);
  }
}
