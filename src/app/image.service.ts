import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ConfigService {
  url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

  constructor(private http: HttpClient) {
  }

  getPiece(request: string) {
    return this
      .http
      .get(`${this.url} + ${request}`);
  }
}
