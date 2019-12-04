import { Component, NgZone } from '@angular/core';
import { Source } from 'webpack-sources';
import { Tracker } from '../Tracker';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'
import { SettingsService } from '../settings.service';


@Component({
  selector: 'app-blacklist',
  templateUrl: 'blacklist.page.html',
  styleUrls: ['blacklist.page.scss']
})
export class blacklistPage {

  brock: Tracker;
  jerry: Tracker;
  may: Tracker;
  trackers: any;

  constructor(public alertCont: AlertController, private settings: SettingsService) {
    this.brock = new Tracker('brock', 'address', 50, 'ABCD', 0);
    this.jerry = new Tracker('jerry', 'address', 40, 'EFGH', 0);
    this.may = new Tracker('may', 'address', 30, 'IJKL', 0);
    this.trackers = [this.brock,this.jerry,this.may];
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
          cssClass: 'whtlst',
          handler: () => {
            this.removeTracker(tracker);
            this.settings.addToWhitelist(tracker.name, tracker.address);
          }
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
