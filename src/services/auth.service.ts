import {Injectable} from '@angular/core';
import {User} from '../app/models/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  theAustinAPIbase: 'http://project2-direct.bdpw8pn2ff.us-east-1.elasticbeanstalk.com/'; // Update this later.

  constructor(private http: HttpClient) {
  }

  public getToken(): string {
    return localStorage.getItem('swJWT');
  }


  loginUser(lFormLogin: string, lFormPassword: string): Observable<User> {
    const credentials = {userUsername: lFormLogin, userPassword: lFormPassword};

    this.http.get(this.theAustinAPIbase + 'auth')
      .subscribe((res: Response) => {
        localStorage.setItem('swJWT', res.headers.get('Authorization'));
      });

    return this.http.post<User>(this.theAustinAPIbase + 'auth', credentials).pipe();
  }
}
