import { Component, NgZone } from '@angular/core';
import { Source } from 'webpack-sources';
import { Tracker } from '../Tracker';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-whitelist',
  templateUrl: 'whitelist.page.html',
  styleUrls: ['whitelist.page.scss']
})
export class whitelistPage {

  trackers: any;

  constructor(public alertCont: AlertController) {
    
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
