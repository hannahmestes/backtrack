import { Component, NgModule } from '@angular/core';
import { TermsandconditonsPage } from '../termsandconditons/termsandconditons.page';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']

})
export class Tab3Page {

  constructor(public modalController: ModalController, private router: Router) {

  }

  async Terms() {
    const modal = await this.modalController.create({
      component: TermsandconditonsPage,
      backdropDismiss: false
    });
    return await modal.present();
  }  

  toTutorial() {
    this.router.navigate(['/tutorial']);
  }

  getHelp(){
    let browser = InAppBrowser.create("https://www.domesticshelters.org/help#?page=1", "_system");
  }

  getFacts(){
    let browser = InAppBrowser.create("https://www.safehorizon.org/get-help/stalking/#overview/", "_system");
  }

}
