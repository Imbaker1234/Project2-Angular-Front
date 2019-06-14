import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-art',
  templateUrl: './favorite-art.component.html',
  styleUrls: ['./favorite-art.component.css']
})
export class FavoriteArtComponent implements OnInit {

art = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }

}