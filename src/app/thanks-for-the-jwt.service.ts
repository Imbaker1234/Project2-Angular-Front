import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StateService} from '../services/state.service';

@Injectable({
  providedIn: 'root'
})
export class ThanksForTheJWTService implements HttpInterceptor {

  constructor(private stateService: StateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.stateService.log(req.clone().headers.get('Authorization'));
    console.log('ThanksForTheJWTService grabbed a token\n\n' + localStorage.swJWT);
    return next.handle(req);
  }
}
