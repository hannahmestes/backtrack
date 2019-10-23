import { Component } from '@angular/core';
import { TermsandconditonsPage } from '../termsandconditons/termsandconditons.page';
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']

})
export class Tab3Page {

  constructor(public modalController: ModalController) {}

  async Terms(){

    const modal = await this.modalController.create({
      component: TermsandconditonsPage
    });
    return await modal.present();
  }

}
