import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music'
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private favSongs = []
  constructor(
    private musicProvider: MusicProvider,
    public navCtrl: NavController, public navParams: NavParams) {
   this.favSongs = this.musicProvider.getFavs();
  }

}
