import {Component, OnInit} from '@angular/core';
import {ArtService} from '../../services/art.service';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-artview',
  templateUrl: './artview.component.html',
  styleUrls: ['./artview.component.css']
})
export class ArtviewComponent implements OnInit {

  shownArtId: number;
  shownArtURL: string;

  constructor(private harvardAccessService: ArtService, private stateService: StateService) {
    this.stateService.artSubject$.subscribe(
      data => {
        this.shownArtURL = data.baseimageurl;
      }
    );
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
