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
    let video = document.createElement("VIDEO");

    video.setAttribute("controls", "controls");
    video.setAttribute("preload", "metadata");
    video.setAttribute("autoplay", "autoplay"); 
    let source = document.createElement("SOURCE");
    source.setAttribute("src", "assets/Cat_Video.mp4");    
    source.setAttribute("type", "video/mp4"); 
    video.appendChild(source);

    document.body.appendChild(video);
  }

}
