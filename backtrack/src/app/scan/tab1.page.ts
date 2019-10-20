import { Component } from '@angular/core';
import { BluetoothService } from '../bluetooth-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private blueToothService: BluetoothService) {}

  scan(){
    this.blueToothService.isScanning().then(res=>{
    if (res.isScanning)
      this.blueToothService.stopScanning();
    else
      this.blueToothService.startScanning();
    });
  }

}
