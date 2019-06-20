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

  // ------ Creating the observable ----------
  // Create a subject - The thing that will be watched by the observable
  public activeUser = new Subject<User>();

  // Create an observable to watch the subject and send out a stream of updates (You will subscribe to this to get the update stream)
  public activeUser$ = this.activeUser.asObservable(); // Has a $

  // Subscribe to the observable you created.. data will be updated each time there is a change to Subject
  public userSubscription = this.activeUser$.subscribe(data => {
    console.log('User was updated');
  });
  // ==============================================================

  // ------ Creating the observable ----------
  // Create a subject - The thing that will be watched by the observable
  public activeArt = new Subject<ArtModel>();

  // Create an observable to watch the subject and send out a stream of updates (You will subscribe to this to get the update stream)
  public activeArt$ = this.activeArt.asObservable(); // Has a $

  // Subscribe to the observable you created.. data will be updated each time there is a change to Subject
  public artSubscription = this.activeArt$.subscribe(data => {
    console.log('User was updated');
  });

  // Create a method that allows you to update the subject being watched by observable
  public updateUserSubject(newUser: User) {
    this.activeUser.next(newUser);
  }

  // Create a method that allows you to update the subject being watched by observable
  public updateArtSubject(newArt: ArtModel) {
    this.activeArt.next(newArt);
  }

}
