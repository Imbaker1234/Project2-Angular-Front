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
    this.metAccessService.stumble();
  }
}
