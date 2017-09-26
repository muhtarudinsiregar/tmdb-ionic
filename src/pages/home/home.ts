import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TmdbProvider } from '../../providers/tmdb/tmdb';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private movies: Array<object> = [];

  constructor(public navCtrl: NavController, private tmdbProvider: TmdbProvider) {
  }

  ionViewDidLoad() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.tmdbProvider.getPopularMovies().subscribe(data => {
      this.movies = data;
    });
  }

}
