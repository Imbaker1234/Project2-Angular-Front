import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../app/models/user';
import {StateService} from './state.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userSubject = new Subject<User>();

  swURLBase = 'http://project2-direct.bdpw8pn2ff.us-east-1.elasticbeanstalk.com/';

  public userSubjectReporter$ = this.userSubject.asObservable(); // Has a $

  public userSubscription = this.userSubjectReporter$.subscribe(data => {
    this.userSubject.next(data);
    console.log('User was updated');
    this.stateService.stateUser = data;
  });

  constructor(private http: HttpClient, private stateService: StateService) {
  }


  public updateUserSubject(newUser: User) {
    this.userSubject.next(newUser);
  }

  registerUser(user: User): Observable<any> {
    return this.http.post<User>(this.swURLBase + '/user', user)
      .pipe();
  }

}
