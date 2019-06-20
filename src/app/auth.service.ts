import {Injectable} from '@angular/core';
import {User} from './models/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  theAustinAPIbase: string; // Update this later.

  constructor(private http: HttpClient) {
  }

  loginUser() {
    console.log('AuthService.loginUser was called');
    return this.http.get<User>(this.theAustinAPIbase);
  }


}
