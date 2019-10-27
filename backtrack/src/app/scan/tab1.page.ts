import { Component } from '@angular/core';
import { BluetoothService } from '../bluetooth-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public loan: Array<{item: device}> = [];
  constructor(private blueToothService: BluetoothService) {}

  scan(){
    this.blueToothService.isScanning().then(res=>{
    if (res.isScanning)
      this.blueToothService.stopScanning();
    else
      this.blueToothService.startScanning();
    });
  }
  
  public name() {
  } 

  public appendList() {
    let item = new device("5550123");
    let test = document.createElement(item.name);

  }

  public changeColor() {

  }
} 

export class device {
  name: string;
  id: string;
  other: string;
  constructor(id: string){
    this.id = id;
    this.other = "E54GN67";
    this.name = "Tile";
  }
}

