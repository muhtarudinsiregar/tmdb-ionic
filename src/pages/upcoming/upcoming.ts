import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { TmdbProvider } from "../../providers/tmdb/tmdb";
import { HomeDetailPage } from "../home-detail/home-detail";

@Component({
  selector: "page-upcoming",
  templateUrl: "upcoming.html"
})
export class UpcomingPage {
  public movies: Array<object> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tmdbProvider: TmdbProvider
  ) {}

  ionViewDidLoad() {
    this.tmdbProvider.getUpcomingMovies().subscribe(res => {
      this.movies = res;
      console.log(res);
    });
  }

  detailMovie(movie: object) {
    this.navCtrl.push(HomeDetailPage, { movie: movie });
  }
}
