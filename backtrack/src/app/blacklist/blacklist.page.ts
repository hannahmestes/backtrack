import { Component, NgZone } from '@angular/core';
import { Source } from 'webpack-sources';
import { Tracker } from '../Tracker';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-blacklist',
  templateUrl: 'blacklist.page.html',
  styleUrls: ['blacklist.page.scss']
})
export class blacklistPage {

  brock: Tracker;
  trackers: any;

  constructor(public alertCont: AlertController) {
    this.brock = new Tracker('name', 'address', 69, 'fourtwenty');
    this.trackers = [this.brock];
  }

  removeTracker(tracker: Tracker) {
    for (let x = 0; x < this.trackers.length; x++){
      if (this.trackers[x] == tracker) {
        this.trackers.splice(x,1);
      }
    }
  } 

  async confirmation(tracker: Tracker){
    const alert = await this.alertCont.create({
      header: 'Are you sure?',
      message: 'Would you like to do ...',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'can'
        },
        {
          text: 'Whitelist',
          role: 'whitelist',
          cssClass: 'whtlst'
        },
        {
          text: 'Remove',
          role: 'remove',
          cssClass: 'rmv',
          handler: () =>{
            this.removeTracker(tracker)
          }
        }
      ]
    });
    await alert.present();
  }
}
