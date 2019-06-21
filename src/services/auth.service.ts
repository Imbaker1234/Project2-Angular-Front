import {Injectable} from '@angular/core';
import {User} from '../app/models/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  theAustinAPIbase = 'http://project2-direct.bdpw8pn2ff.us-east-1.elasticbeanstalk.com/'; // Update this later.

  constructor(private http: HttpClient) {
  }

  public getToken(): string {
    return localStorage.getItem('swJWT');
  }


  loginUserOld(lFormLogin: string, lFormPassword: string): Observable<User> {
    const credentials = {userUsername: lFormLogin, userPassword: lFormPassword};

    return this.http.post<User>(this.theAustinAPIbase + 'auth', credentials).pipe();
  }

  loginUser(username: string, password: string): User {
    const endpoint = this.theAustinAPIbase + 'auth';
    console.log('Searching using\n' + endpoint);
    this.http.post<User>(this.theAustinAPIbase + 'auth',
      {userUsername: username, userPassword: password}, {observe: 'response'}
    ).subscribe(data => {
      console.log('UserService.registerUser() called with value of\n' + data);
      localStorage.setItem('swJWT', data.headers.get('Authorization'));
      return data;
    });
    return null;
  }
}
