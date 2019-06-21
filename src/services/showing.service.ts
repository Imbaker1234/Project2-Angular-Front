import { Injectable } from '@angular/core';
import { Showing } from '../app/models/showing'

@Injectable({
  providedIn: 'root'
})
export class ShowingService {

  constructor() { }

  addShowing(showing: Showing) {
    const returnVar = this.http.post<Showing>(this.swURLBase + 'user',
      {

      }
    ).subscribe(data => {
      console.log('UserService.registerUser() called with value of\n' + data);
      return data;
    });
  }
}
