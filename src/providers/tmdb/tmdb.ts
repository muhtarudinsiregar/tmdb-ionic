import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiProvider } from '../api/api';

@Injectable()
export class TmdbProvider {

  constructor(public http: Http, public api: ApiProvider) {
    console.log('Hello TmdbProvider Provider');
  }

  getPopularMovies() {
    return this.api.get('/movie/popular')
      .map(data => data.results);
  }

  getUpcomingMovies() {
    return this.api.get('/movie/upcoming').map(data => data.results);
  }
}
