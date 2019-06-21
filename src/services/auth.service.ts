import {Injectable} from '@angular/core';
import {User} from '../app/models/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  theAustinAPIbase: 'localhost:8080/'; // Update this later.

  constructor(private http: HttpClient) {
  }

  loginUser(lFormLogin: string, lFormPassword: string): Observable<User> {
    const credentials = {userUsername: lFormLogin, userPassword: lFormPassword};

    return this.http.post<User>(this.theAustinAPIbase + 'auth', credentials).pipe();
  }
}
