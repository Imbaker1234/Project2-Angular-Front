import {Component, OnInit} from '@angular/core';
import {HarvardAccessService} from '../harvard-access.service';
import {ArtModel} from '../art-model';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginValid: false;
  artPiece: ArtModel;

  constructor(private harvardAccessService: HarvardAccessService, authService: AuthService) {
  }

  ngOnInit() {
  }

  search() {
    this.harvardAccessService.getById(4120).subscribe(
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

  }

  submitLogin() {

  }
}
