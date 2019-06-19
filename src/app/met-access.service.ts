import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetAccessService {

  metURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

  constructor(private http: HttpClient) {
  }

  getArtByID(id: number): JSON {
    const requestURL = this.metURL + id;
    console.log("This was the URL that was queried for:\n" + requestURL);
    this.http.get(requestURL
    ).subscribe(responseData => {
      return responseData;
    });
    return null;
  }

  stumble(): JSON {
   return this.getArtByID(Math.floor(Math.random() * (+420000 - +1)) + +1);
  }
}
