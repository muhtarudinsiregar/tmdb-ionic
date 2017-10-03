import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { TmdbProvider } from "../../providers/tmdb/tmdb";

/**
 * Generated class for the HomeDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: "page-home-detail",
  templateUrl: "home-detail.html"
})
export class HomeDetailPage {
  movie: any = {};
  similarMovies: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tmdbApi: TmdbProvider
  ) {
    this.movie = navParams.get("movie");
  }

  ionViewDidLoad() {
    const movieId = this.movie.id;
    this.tmdbApi.getSimilarMovies(movieId).subscribe(res => {
      this.similarMovies = res;
    });
  }

  posterUrl(url: string) {
    return `https://image.tmdb.org/t/p/w780/${url}`;
  }
}
