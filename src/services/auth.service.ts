import {Injectable} from '@angular/core';
import {User} from '../app/models/user';
import {HttpClient} from '@angular/common/http';
import {StateService} from './state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  theAustinAPIbase = 'http://project2-direct.bdpw8pn2ff.us-east-1.elasticbeanstalk.com/'; // Update this later.

  constructor(private http: HttpClient, private stateService: StateService) {
  }

  public getToken(): string {
    this.stateService.log('AuthService.getToken() called\n\n' + localStorage.getItem('swJWT'));
    return localStorage.getItem('swJWT');
  }

  loginUserOld(username: string, password: string): User {
    this.stateService.log('AuthService.loginUser(' + username + ', ' + password + ') called');
    let returnVar: User = null;
    const endpoint = this.theAustinAPIbase + 'auth';
    console.log('Searching using\n' + endpoint);
    const theRequest = this.http.post<User>(this.theAustinAPIbase + 'auth',
      {userUsername: username, userPassword: password}
    ).subscribe(data => {
      console.log('UserService.loginUser() called with value of\n' + data);
      returnVar = data;
    });

    this.stateService.log('AuthService.loginUser() returned value of\n\n' + returnVar);
    return returnVar;
  }


  loginUser(login: string, password: string) {
    this.stateService.log('AuthService.loginUser(' + login + ', ' + password + ')');
    const endpoint = this.theAustinAPIbase + 'auth';
    const outgoing = JSON.stringify([login, password]);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint, true);
    xhr.send(outgoing);

    // tslint:disable-next-line:only-arrow-functions
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const result = JSON.parse(xhr.responseText);
        window.localStorage.setItem('swJWT', xhr.getResponseHeader('Authorization'));
        return result;
      }
    };
  }
}
