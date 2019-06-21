import {Component, OnInit} from '@angular/core';
import {ArtService} from '../../services/art.service';
import {ArtModel} from '../models/art-model';
import {AuthService} from '../../services/auth.service';
import {StateService} from '../../services/state.service';
import {User} from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  artPiece: ArtModel;
  searchId: number;
  lFormLogin: string;
  lFormPassword: string;

  constructor(private harvardAccessService: ArtService, private authService: AuthService, private stateService: StateService) {
  }

  ngOnInit() {
  }

  search() {
    this.harvardAccessService.getById(this.searchId).subscribe(
      inc => {
        this.stateService.artSubject = inc;
      });
  }

  stumble() {
    const rando = (Math.floor(Math.random() * 200000) + 1);
    this.harvardAccessService.getById(rando).subscribe(
      inc => {
        this.stateService.artSubject = inc;
      });
  }

  submitLogin() {
    this.authService.loginUser(this.lFormLogin, this.lFormPassword).subscribe(
      returnVar => {

        this.stateService.updateUserSubject(new User(
          returnVar.username,
          returnVar.password,
          returnVar.firstName,
          returnVar.lastName,
          returnVar.email,
          returnVar.hearts,
          returnVar.role
        ));
      },
      error => {
        console.error(error);
      }
    );
  }
}
