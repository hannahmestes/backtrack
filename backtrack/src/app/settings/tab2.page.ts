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
  public bkgsc: boolean;

  constructor(private settings: SettingsService, public router: Router) {
    this.bkgsc = true;
  }

  saveSettings(){
    this.settings.setBackgroundScanning(this.bkgsc);
  }

  changeDistance(x: number){
    this.distance = x;
  }

  blacklist(){
    this.router.navigate(['/blacklist']);
  }

  whitelist(){
    this.router.navigate(['/whitelist'])
  }
}
