import {Component, OnInit} from '@angular/core';
import {MetAccessService} from '../met-access.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginValid: false;

  constructor(private metAccessService: MetAccessService) {
  }

  ngOnInit() {
  }

  stumble() {
    // const myArtModel: Artmodel[] = this.metAccessService.stumble();
    // console.log('TITLE: ' + myArtModel[0].title + '\n' +
    //   'URL: ' + myArtModel[0].primaryImageSmall);

    this.metAccessService.harvardSampleRequest();
  }
}
