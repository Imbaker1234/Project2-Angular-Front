import {Component, OnInit} from '@angular/core';
import {MetAccessService} from '../met-access.service';
import {Artmodel} from '../models/artmodel';

@Component({
  selector: 'app-artview',
  templateUrl: './artview.component.html',
  styleUrls: ['./artview.component.css']
})
export class ArtviewComponent implements OnInit {

  private objectId: number;
  private primaryImageSmall: string;
  private artJSON: Artmodel;
  private title: string;
  private creditLine: string;
  private artistName: string;

  constructor(private metAccesService: MetAccessService) {
    this.loadArt();
  }

  ensureRetrievedValueHasPicture() {
    for (let i = 0; i < 30; i++) {
      console.log(i);
      this.artJSON = this.metAccesService.stumble()[0];
      if (this.primaryImageSmall === '') {
        continue;
      } else {
        return;
      }
    }
    alert('Service temporarily unavailable. Please try again later.');
  }

  loadArt() {
    this.ensureRetrievedValueHasPicture();
    this.objectId = this.artJSON[0].objectID;
    this.primaryImageSmall = this.artJSON[0].primaryImageSmall;
    this.title = this.artJSON.title;
    this.creditLine = this.artJSON.creditLine;
    this.artistName = this.artJSON.artistDisplayName;
    console.log((this.artJSON));
  }

  ngOnInit() {

  }

}

/* Pass value of object id to constructor for the Artview

Use MAS - met access servies. Make a request to our API using one of the already provided methods

Add all necessary key value pairs above constructor so that artview will populate the necessary material

Align names of art with that of the API

Assign values from API to variables

Assign property binding and interpolation to the necessary fields in the art view - ex. [img]="picture url from API here"

Remove all work-inappropriate content */
