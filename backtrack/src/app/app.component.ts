import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';
import { TermsandconditonsPage } from './termsandconditons/termsandconditons.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  //router: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private settings: SettingsService,
    private modalController: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.settings.retrieveSettings().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        console.log("TERMS", this.settings.hasAcceptedTerms);
        if (!this.settings.hasAcceptedTerms){
          this.Terms();
        }
        if (!this.settings.hasViewedTutorial) {
          this.router.navigate(['/tutorial']);
        }
      });
    });
  }

  async Terms() {
    const modal = await this.modalController.create({
      component: TermsandconditonsPage,
      backdropDismiss: false
    });
    return await modal.present();
  }  
}
