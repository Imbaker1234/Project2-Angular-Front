import {Injectable} from '@angular/core';
import {ArtModel} from './art-model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class HarvardAccessService {
  harvardKey = '79371960-9294-11e9-9dbd-c19aaf23e283';
  urlBase = 'https://api.harvardartmuseums.org/image/';
  apiParam = '?apikey=';
  // harvardRequest = this.urlBase + id + this.apiParam + this.harvardKey;
  private payLoad: ArtModel[];

  constructor(private http: HttpClient) {
  }

  // Creating and returning an observable which requests this information
  // Subscription happens in the component that calls this method.
  getById(id: number): Observable<any> {
    console.log('Harvard-Access-Service.getById(' + id + ')');
    // This is just waiting to receive the specified object in the brackets. Returning it once
    // it has it. (See Navbar for further demo)
    return this.http.get<ArtModel[]>(this.urlBase + id + this.apiParam + this.harvardKey);
  }

}
