import {Injectable} from '@angular/core';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  activeUser: User;

  constructor() {
  }


}
