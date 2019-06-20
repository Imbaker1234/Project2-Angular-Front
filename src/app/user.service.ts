import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  swURLBase = 'www.google.com';

  constructor(private http: HttpClient) {
  }

  registerUser(user: User): Observable<any> {
    return this.http.post<User>(this.swURLBase + '/user', user)
      .pipe();
  }
}
