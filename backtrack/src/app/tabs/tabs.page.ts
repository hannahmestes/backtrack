import { Component } from '@angular/core';
//import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(/*private videoPlayer: VideoPlayer*/) {}
  runPanic: boolean;

  panic(){
    // do the panic thing
    this.runPanic=true;
    console.log("Hi");
  }

}
