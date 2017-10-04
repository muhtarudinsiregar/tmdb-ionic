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
  detail: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tmdbApi: TmdbProvider
  ) {
    this.movie = navParams.get("movie");
  }

  ionViewDidLoad() {
    const movieId = this.movie.id;
    this.tmdbApi.getDetailMovie(movieId).subscribe(res => (this.detail = res));
  }

  posterUrl(url: string, size: number = 780) {
    return `https://image.tmdb.org/t/p/${size}/${url}`;
  }
}
