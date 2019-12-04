import { Component, OnInit, NgZone } from '@angular/core';
import { ɵTestingCompiler } from '@angular/core/testing';
import { BluetoothService } from '../bluetooth-service.service';
import { Tracker } from '../Tracker';
import { ActivatedRoute } from '@angular/router';
import { ModalPagePage } from '../modal-found-page/modal-found-page.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'


@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.page.html',
  styleUrls: ['./find-page.page.scss'],
})
export class FindPagePage implements OnInit {
  distance: number;
  name: string;
  colorRed: boolean;
  colorYellow: boolean;
  colorGreen: boolean;
  address: string;

  constructor(private bluetoothService: BluetoothService, 
              private actRoute: ActivatedRoute, 
              private ngZone: NgZone,
              private modalController: ModalController,
              private router: Router,
              public alertCont: AlertController
) {
    this.distance = 0;
   }

  ngOnInit() {
    this.address = this.actRoute.snapshot.params['address'];
    this.getDistance();
  }

  ngOnDestroy(){
    this.bluetoothService.stopFinding();
  }

  getDistance(){
    this.bluetoothService.getDistance(this.address).subscribe(res => {
      this.ngZone.run( () => {
        this.distance = res;
        this.colorCircle(this.distance);
      });
    });
  }

  addToWhitelist(){
    this.bluetoothService.addToWhitelist(this.address, this.name);
    
  }

  async confirmation(){
    const alert = await this.alertCont.create({
      header: 'Are you sure?',
      message: 'Would you like to add this device to the Whitelist?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'can'
        },
        {
          text: 'Trust',
          role: 'remove',
          cssClass: 'rmv',
          handler: () =>{
            this.addToWhitelist();
            this.router.navigate(['/']);
          }
        }
      ]
    });
    await alert.present();
  }

    async foundDeviceModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      backdropDismiss: false
    });
    return await modal.present();
  }  

  getHelp(){
    this.router.navigate(['/tutorial']);
  }

  colorCircle(distance) {
    if (distance >= 10) {
      this.colorRed = true;
      this.colorYellow = false;
      this.colorGreen = false;
    } else if (distance < 10 && distance > 2) {
      this.colorRed = false;
      this.colorYellow = true;
      this.colorGreen = false;
    } else if (distance <= 2) {
      this.colorRed = false;
      this.colorYellow = false;
      this.colorGreen = true;
    }

  }

}


