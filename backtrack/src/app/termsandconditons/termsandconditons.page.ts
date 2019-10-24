import { Component, OnInit,  } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-termsandconditons',
  templateUrl: './termsandconditons.page.html',
  styleUrls: ['./termsandconditons.page.scss'],
})
export class TermsandconditonsPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
