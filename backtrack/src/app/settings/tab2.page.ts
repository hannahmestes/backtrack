import { Component } from '@angular/core';
import { FindPagePage } from '../find-page/find-page.page';
import { NavController, NavParams } from '@ionic/angular';
import { SettingsService } from '../settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public notifications: boolean;
  public distance: number;

  constructor(private settings: SettingsService, public router: Router) {}

  setBackgroundTracking(){
    if (this.settings.backgroundScanningEnabled == false){
      this.settings.setBackgroundScanning(true);
    }
    else if (this.settings.backgroundScanningEnabled == true){
      this.settings.setBackgroundScanning(false);
    }
  }

  setNotifications(){
    if (this.notifications == false){
      this.notifications = true;
    }
    else if (this.notifications == true){
      this.notifications = false;
    }
  }

  changeDistance(x: number){
    this.distance = x;
  }

  blacklist(){
    this.router.navigate(['blacklist']);
  }
}
