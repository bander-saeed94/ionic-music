import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PlaySongPage } from '../pages/play-song/play-song'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing'
import { Media } from '@ionic-native/media'
import { MusicProvider } from '../providers/music/music';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PlaySongPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PlaySongPage
  ],
  providers: [
    Media,
    SocialSharing,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicProvider
  ]
})
export class AppModule {}
