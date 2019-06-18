import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetAccessService {

  metURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

  constructor(private http: HttpClient) {
  }

  getArtByID(id: number) {
    this.http.get(
      '' + this.metURL + id
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  stumble() {

    this.getArtByID(Math.floor(Math.random() * (+420000 - +1)) + +1);
  }
}
