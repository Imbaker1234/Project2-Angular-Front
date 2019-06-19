import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {Artmodel} from './models/artmodel';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class MetAccessService {
  harvardKey = '79371960-9294-11e9-9dbd-c19aaf23e283';
  harvardRequest = 'https://api.harvardartmuseums.org/RESOURCE_TYPE?apikey=' + this.harvardKey;
  metURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

  payLoad: Artmodel[] = [];

  constructor(private http: HttpClient) {
  }

  doPost(postData: { title: string; content: string }) {
    postData = {title: 'The Lightbringer Saga', content: 'Brent Weeks'};
    console.log('doPost called!');
    this.http.post('https://jsonplaceholder.typicode.com/posts/1', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  // Harvard Sample Request

  harvardSampleRequest() {
// Find all of the objects that are paintings and have the word "rabbit" in the title
    const apiEndpointBaseURL = 'https://api.harvardartmuseums.org/object';
    const queryString = $.param({
      apikey: this.harvardKey,
      title: 'warrior',
      classification: 'Paintings',
      fields: 'objectnumber,title,images'
    });

    $.getJSON(apiEndpointBaseURL + '?' + queryString, function(data) {
      console.log('harvardSampleRequest called!');
      /* Data - The JSON response data.
         Records - Array of Individual pieces of art
         Images - Array of image related fields.
         baseimageurl - The image url we want to apply.

         ex. data.records[2].images[0].baseimageurl
       */

      console.log(data.records[2].images[0].baseimageurl);
    });
  }
  // Specifying the method and more importantly its return type
  // for use within our component from which this method will be
  // called.
  getArtByID(id: number): Artmodel[] {
    // Calling the this.http so we can gain access to methods from
    // the HttpClientModule.
    this.http
    /* Employing the Http GET method. specifying that we are asking
    for a Key: string Value: Artmodel (defined in its own class)
     pair. We are hitting 'this,metURL' and we are specifying what
     we expect to get.
     */
      .get<{ [key: string]: Artmodel }>(this.metURL + id)
      /* Employing a pipe that uses an rsjx map operator we 'map'
      the data inbound from out response into a variable 'responseData'
       */
      .pipe(map(responseData => {
        /* We use fat arrow lamba notation to immediately feed into
      an inline anonymous function that starts off by declaring an
      array of Artmodels that we define as 'myDataNodes'.
         */
        const myDataNodes: Artmodel[] = [];
        // Our inline function now checks for each key in our response
        for (const key in responseData) {
          /* Now we do a sanity check to confirm that the responseData
          has a key before proceeding forward. */
          if (responseData.hasOwnProperty(key)) {
            /* Here we push the equivalent of a null value for each type.
            '' for strings, 0 for numbers. Providing the three periods
            before responseData to indicate we want to push all fields
            into our array.*/
            myDataNodes.push({
              accessionNumber: undefined,
              additionalImages: [],
              artistAlphaSort: undefined,
              artistBeginDate: 0,
              artistDisplayBio: '',
              artistDisplayName: '',
              artistEndDate: 0,
              artistNationality: '',
              artistPrefix: '',
              artistRole: undefined,
              artistSuffix: '',
              city: '',
              classification: '',
              constituents: undefined,
              country: '',
              county: '',
              creditLine: '',
              culture: '',
              department: '',
              dimensions: '',
              dynasty: undefined,
              excavation: undefined,
              geographyType: '',
              isHighlight: false,
              isPublicDomain: '',
              linkResource: undefined,
              locale: '',
              locus: undefined,
              medium: '',
              metadataDate: undefined,
              objectBeginDate: 0,
              objectDate: '',
              objectEndDate: 0,
              objectID: 0,
              objectName: '',
              objectURL: '',
              period: undefined,
              portfolio: undefined,
              primaryImage: '',
              primaryImageSmall: '',
              region: '',
              reign: undefined,
              repository: '',
              rightsAndReproduction: undefined,
              river: '',
              state: '',
              subregion: '',
              tags: [],
              title: '',
              ...responseData
            });
          }
          return myDataNodes;
        }
      }))
      .subscribe(myData => {
        this.payLoad = myData;
      });
    return this.payLoad;
  }


  stumble(): Artmodel[] {
    const myRandomNumber = Math.floor(Math.random() * (+420000 - +1)) + +1;
    console.log('Retrieving art with Object ID #' + myRandomNumber);
    return this.getArtByID(myRandomNumber);
  }
}
