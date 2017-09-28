import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { API } from '../../config/api';

@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
  }

  get(path: string) {
    return this.http
      .get(
        `https://api.themoviedb.org/3${path}?api_key=${API.TOKEN}`
      )
      .map(res => res.json());
  }
}
