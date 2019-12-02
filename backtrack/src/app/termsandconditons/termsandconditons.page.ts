import { Component, OnInit,  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsService } from '../settings.service';


@Component({
  selector: 'app-termsandconditons',
  templateUrl: './termsandconditons.page.html',
  styleUrls: ['./termsandconditons.page.scss'],
})
export class TermsandconditonsPage implements OnInit {

  constructor(private modalCtrl: ModalController, private settings: SettingsService) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    }).then(()=> this.settings.acceptTerms());
  }

}
