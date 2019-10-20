import { Injectable } from '@angular/core';
import { Tracker } from './Tracker';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { Platform } from '@ionic/angular';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  mockTrackers = [];
  trackerUUIDs = ['FEED', 'FEEC', 'FE33', 'FE65'];
  mockDistance: Observable<number> = of(10);
  trackers: BehaviorSubject<Tracker[]> = new BehaviorSubject([]);


  // initializes bluetooth function
  constructor(private bluetoothle: BluetoothLE, public plt: Platform) { 
    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      this.bluetoothle.initialize().subscribe(ble => {
        console.log('ble', ble.status) // logs 'enabled'
      });
    });

    this.trackers.subscribe(res => console.log('Trackers: ', JSON.stringify(res)));
  }


  public startScanning(): void{
    this.bluetoothle.startScan({ services: [] }).subscribe(scanStatus => {      
      if(typeof scanStatus.advertisement !== 'string'){ // TODO: need to fix for android
        if(scanStatus.advertisement && scanStatus.advertisement.serviceUuids){
          if(this.isInTrackerList(scanStatus.advertisement.serviceUuids)){
            this.addToTrackers(new Tracker(scanStatus.name, scanStatus.name, 1, scanStatus.address));
          }
        }
      }
    });
  }

  private calculateDistance(rssi: number, txPowerLevel: number){
    return 10 ** ((rssi - txPowerLevel)/-20);
  }

  addToTrackers(tracker: Tracker){
    let trackerList = this.trackers.value;
      if(!trackerList.some(listTracker => listTracker.address == tracker.address)){
        trackerList.push(tracker);
        this.trackers.next(trackerList);
      }
  }

  private isInTrackerList(uuids: string[]){
    let found = false;
    uuids.forEach(uuid => {
      if (this.trackerUUIDs.includes(uuid)){
          found = true;
      }
    });
    return found;
  }

  public stopScanning(): void{
    this.trackers = null;
    this.bluetoothle.stopScan();
  }

  public getTrackers(): Observable<Tracker[]>{
    return this.trackers;
  }

  public isScanning(): any{
    return this.bluetoothle.isScanning()
  }

  public showDistance(tracker: Tracker): Observable<number>{
    this.bluetoothle.rssi({address: tracker.address}).then(rssi => console.log(rssi));
    // TODO: impl
    return this.mockDistance;

  }

}
