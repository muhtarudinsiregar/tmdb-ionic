import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-detail',
  templateUrl: 'home-detail.html',
})
export class HomeDetailPage {
  movie: object = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = navParams.get("movie");
  }

  ionViewDidLoad() { }

}
