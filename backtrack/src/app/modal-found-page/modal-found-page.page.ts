import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'modal-found-page',
})
export class ModalPage {

  constructor() {

  }

}

@Component({
  selector: 'app-modal-found-page',
  templateUrl: './modal-found-page.page.html',
  styleUrls: ['./modal-found-page.page.scss'],
})
export class ModalPagePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  closeModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  getHelp(){
    let browser = InAppBrowser.create("https://www.domesticshelters.org/help#?page=1", "_system");
  }
}

//create<T extends ComponentRef>(options: ModalOptions<T>) => Promise<HTMLIonModalElement>      Create
//dismiss(data?: any, role?: string | undefined, id?: string | undefined) => Promise<boolean>   Dismiss

