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
  loginValid: false;
  artPiece: ArtModel;
  searchId: number;

  constructor(private harvardAccessService: HarvardAccessService, private authService: AuthService, private stateService: StateService) {
  }

  ngOnInit() {
  }

  search() {
    this.harvardAccessService.getById(this.searchId).subscribe(
      returnVar => {

        this.artPiece = new ArtModel(
          returnVar.id,
          returnVar.baseimageurl
        );
      },
      error => {
        console.error(error);
      }
    );

    console.log(this.artPiece);
  }

  stumble() {
    const rando = (Math.floor(Math.random() * 200000) + 1);
    this.harvardAccessService.getById(rando);
  }

  submitLogin() {
    this.authService.loginUser().subscribe(
      returnVar => {

        this.stateService.activeUser = new User(

        );
      },
      error => {
        console.error(error);
      }
    );

    console.log(this.artPiece);
  }
}
