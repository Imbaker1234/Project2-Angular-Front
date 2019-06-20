import {Injectable} from '@angular/core';
import {User} from './models/user';
import {ArtModel} from './art-model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {


  constructor() {
  }

  // ==============================================================
  // Declare our variable for holding our various elements.
  stateArt: ArtModel;
  stateUser: User;

  // ==============================================================
  // ------ Creating the observable ----------
  // Create a subject - The thing that will be watched by the observable
  public artSubject = new Subject<ArtModel>();
  public userSubject = new Subject<User>();

  // Create an observable to watch the subject and send out a stream of updates (You will subscribe to this to get the update stream)
  public artSubject$ = this.artSubject.asObservable(); // Has a $
  public userSubjectReporter$ = this.userSubject.asObservable(); // Has a $

  // ===================================================
  // Subscribe to the observable you created.. data will be updated each time there is a change to Subject
  public artSubscription = this.artSubject$.subscribe(data => {
    console.log('User was updated');
    this.artSubject.next(data);
    this.stateArt = data;
  });

  public userSubscription = this.userSubjectReporter$.subscribe(data => {
    this.userSubject.next(data);
    console.log('User was updated');
    this.stateUser = data;
  });

  // ===================================================
  // Create a method that allows you to update the subject being watched by observable
  public updateUserSubject(newUser: User) {
    this.userSubject.next(newUser);
  }

  public updateArtSubject(newArt: ArtModel) {
    this.artSubject.next(newArt);
  }

}
