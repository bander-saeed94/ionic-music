import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MusicProvider {

  public favSongs = [];
  private API = "http://orangevalleycaa.org/api/music";
  constructor(public http: HttpClient) {
    // console.log('Hello MusicProvider Provider');
  }
  getMusics() {
    return this.http.get(this.API);
  }

  getOneSong() {
    let randomNum = Math.ceil((Math.random() * 9))
    let oneSong = this.API + "/id/" + randomNum;
    return this.http.get(oneSong);
  }

  getFavs() {
    return this.favSongs;
  }
  addToFav(music) {
    let isSongAdded = this.favSongs.findIndex((favioredSong) => {
      return music.id == favioredSong.id;
    })
    if (isSongAdded == -1) {
      this.favSongs.push(music);
    }
  }
}
