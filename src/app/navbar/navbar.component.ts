import {Component, OnInit} from '@angular/core';
import {HarvardAccessService} from '../harvard-access.service';
import {ArtModel} from '../art-model';
import {AuthService} from '../auth.service';
import {StateService} from '../state.service';
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

  constructor(private harvardAccessService: HarvardAccessService, private authService: AuthService, private stateService: StateService) {
  }

  ngOnInit() {
  }

  search() {
    this.harvardAccessService.getById(this.searchId).subscribe(
      inc => {
        this.stateService.activeArt = inc;
      });
  }

  stumble() {
    const rando = (Math.floor(Math.random() * 200000) + 1);
    this.harvardAccessService.getById(rando).subscribe(
      inc => {
        this.stateService.activeArt = inc;
      });
  }

  submitLogin() {
    this.authService.loginUser(this.lFormLogin, this.lFormPassword).subscribe(
      returnVar => {

        this.stateService.activeUser = new User(
          returnVar.username,
          returnVar.password,
          returnVar.firstName,
          returnVar.lastName,
          returnVar.email
        );
      },
      error => {
        console.error(error);
      }
    );
  }
}
