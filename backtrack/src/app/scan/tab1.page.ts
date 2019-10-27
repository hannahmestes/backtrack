import { Component, NgZone } from '@angular/core';
import { Source } from 'webpack-sources';
import { Tracker } from '../Tracker';
import { BluetoothService } from '../bluetooth-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public trackers$: Observable<Tracker[]>;
  private buttonColor: string;
  private stringTrackers;
  trackers: any


  constructor(private btService: BluetoothService, private zone:NgZone) {
    this.trackers$ = btService.getTrackers();
    this.trackers$.subscribe(res => {
      this.zone.run(() => this.trackers = res)
      console.log(res);
    });
    this.buttonColor = 'primary';
  }

  scan(){
    this.btService.isScanning().then(res=>{
      console.log(res);
    if (res.isScanning){
      this.btService.stopScanning();
      this.buttonColor='primary';
    }
    else {    
      this.btService.startScanning();
      this.buttonColor = 'danger';
    }
    });
  }

} 


