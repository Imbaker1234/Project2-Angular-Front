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

  // loginUserOld(username: string, password: string): User {
  //   this.stateService.log('loginUser called with ' + username + ', ' + password);
  //   let loggedIn = this.http.post<User>(this.theAustinAPIbase + 'auth',
  //     {
  //       userUsername: username,
  //       userPassword: password
  //     }
  //   ).subscribe(data => {
  //     return new User(
  //       data.id,
  //       data.username,
  //       data.password,
  //       data.firstName,
  //       data.lastName,
  //       data.email,
  //       data.heart,
  //       data.role
  //     );
  //   });
  //   console.log('Didn\'t get a proper return value');
  //   return loggedIn;
  // }


  loginUser(login: string, password: string) {
    this.stateService.log('AuthService.loginUser(' + login + ', ' + password + ')');
    const endpoint = this.theAustinAPIbase + 'auth';
    const outgoing = { userUsername: login, userPassword: password};
    const xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint, true);
    xhr.send(JSON.stringify(outgoing))

    // tslint:disable-next-line:only-arrow-functions
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const result = JSON.stringify(xhr.responseText);
        window.localStorage.setItem('swJWT', xhr.getResponseHeader('Authorization'));
        console.log('Result of loginUser\n\n' + result);
      }
    };
  }

  loginUserLol(login: string, password: string) {
    const endpoint = this.theAustinAPIbase + 'auth';
    const credentials = [login, password];
    return this.http
      .post(endpoint, JSON.stringify(credentials)).toPromise()
      .then(res => console.log(res));
  }
}
