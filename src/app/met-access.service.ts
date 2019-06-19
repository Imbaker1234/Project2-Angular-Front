import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {Artmodel} from './models/artmodel';

@Injectable({
  providedIn: 'root'
})
export class MetAccessService {

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

  // doGet() {
  //   this.http
  //     .get<{ [key: string]: Artmodel }>('https://jsonplaceholder.typicode.com/posts/12')
  //     .pipe(map(responseData => {
  //       consnt myDataNodes: Artmodel[] = [];
  //       for (const key in responseData) {
  //         if (responseData.hasOwnProperty(key)) {
  //           myDataNodes.push({body: '', id: 0, title: '', userId: 0, ...responseData});
  //         }
  //         return myDataNodes;
  //       }
  //     }))
  //     .subscribe(myData => {
  //       this.payLoad = myData;
  //       console.log(this.payLoad[0].title);
  //     });
  // }

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
