import { Injectable } from '@angular/core';
import { Showing } from '../app/models/showing'
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowingService {


  swURLBase = 'http://project2-direct.bdpw8pn2ff.us-east-1.elasticbeanstalk.com/';
  constructor(private http: HttpClient) { }

  // addShowing(showing: Showing) {
  //   const returnVar = this.http.post<Showing>(this.swURLBase + 'showing',
  //     {
  //       showingshowId = null,
  //       hostId = showing.hostId,
  //       description = showing.description,
  //       time = showing.time,
  //       address = showing.address
  //     }
  //   ).subscribe(data => {
  //     console.log('UserService.registerUser() called with value of\n' + data);
  //     return data;
  //   });
  // }
}
