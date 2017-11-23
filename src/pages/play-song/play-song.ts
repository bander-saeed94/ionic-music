import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media'
/**
 * Generated class for the PlaySongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-play-song',
  templateUrl: 'play-song.html',
})
export class PlaySongPage {

  private music = {};
  private songMedia: MediaObject = null;
  private isPaused = false;
  constructor(
    private media: Media,
    public navCtrl: NavController, public navParams: NavParams) {
    this.music = this.navParams.get("music");
    console.log(this.music);
  }

  ionViewDidLoad() {
    
  }
  ionViewWillLeave(){
    this.stop();
  }
  play() {
    if (this.songMedia === null) {
      this.songMedia = this.media.create(this.music["music_url"]);
      this.songMedia.play();
      this.isPaused = false;
    }
    else {
      if (this.isPaused) {
        this.songMedia.play();
        this.isPaused = false;
      }
    }
  }
  pause() {
    if (this.songMedia !== null) {
      this.songMedia.pause();
      this.isPaused = true;
    }
  }

  stop() {
    if (this.songMedia !== null) {
      this.songMedia.stop();
      this.songMedia.release();
      this.songMedia = null;
    }
  }

}
