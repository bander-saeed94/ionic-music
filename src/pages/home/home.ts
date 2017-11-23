import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music'
import { SocialSharing } from '@ionic-native/social-sharing'
import { PlaySongPage } from '../play-song/play-song'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private musics = [];
  constructor(
    private socialSharing: SocialSharing,
    private actionSheetController: ActionSheetController,
    private loadingController: LoadingController,
    private musicProvider: MusicProvider,
    public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    let loading = this.loadingController.create({
      content: "getting musics"
    });
    loading.present();
    this.musicProvider.getMusics().subscribe(
      (musics: any[]) => {
        loading.dismiss();
        this.musics = musics;
      }
    )
  }

  shareSong(music) {
    let aSheet = this.actionSheetController.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Share on Twitter',
          icon: 'logo-twitter',
          handler: ()=>{
            this.socialSharing.shareViaTwitter(music.name,music.image,music.music_url);
          }
        },
        {
          text: 'Share on Twitter',
          icon: 'logo-facebook',
          handler: ()=>{
            this.socialSharing.shareViaFacebook(music.name,music.image,music.music_url);
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: ()=>{
            this.socialSharing.share(music.name,"",music.image,music.music_url);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    aSheet.present();
  }
  goToListenPage(music) {
    this.navCtrl.push(PlaySongPage,{
      music: music
    });
  }
  addOneSong(refresher) {
    this.musicProvider.getOneSong()
      .subscribe((song: any[]) => {
        refresher.complete();
        this.musics.unshift(song[0]);
      })
  }
  addToFav(music){
    this.musicProvider.addToFav(music);
  }
}
