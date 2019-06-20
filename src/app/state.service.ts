import {Injectable} from '@angular/core';
import {User} from './models/user';
import {ArtModel} from './art-model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  activeUser: User;
  activeArt: ArtModel;

  constructor() {
  }


}
