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

  trackerUUIDs = ['FEED', 'FEEC', 'FE33', 'FE65'];
  trackers: BehaviorSubject<Tracker[]> = new BehaviorSubject([]);
  distance: BehaviorSubject<number> = new BehaviorSubject(0);
  whitelist: string[] = [];
  isFinding= false;

  // initializes bluetooth function
  constructor(private bluetoothle: BluetoothLE, public plt: Platform) { 
    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      this.bluetoothle.initialize().subscribe(ble => {
        console.log('ble', ble.status) // logs 'enabled'
      }, err => console.log(err));
    });

  }

  // starts scan, adds non-whitelisted devices to trackers
  public startScanning(): void{
    this.bluetoothle.startScan({ services: [] }).subscribe(scanStatus => {      
      if(typeof scanStatus.advertisement !== 'string'){ // TODO: need to fix for android encoded advertisement
        if(scanStatus.advertisement && scanStatus.advertisement.serviceUuids){
          if(this.isInTrackerList(scanStatus.advertisement.serviceUuids) && !this.isInWhiteList(scanStatus.address)){
            this.addToTrackers(new Tracker(scanStatus.name, scanStatus.name, -40, scanStatus.address)); // find a better default value
          }
        }
      }
    }, err => console.log(err));
  }

  // stops scan and resets tracker list
  public stopScanning(): void{
    this.trackers.next([]);
    this.bluetoothle.stopScan();
  }

  public getTrackers(): Observable<Tracker[]>{
    return this.trackers;
  }

  public addToWhitelist(address: string): void{
    this.whitelist.push(address);
  }

  public removeFromWhitelist(address: string): void{
    this.whitelist = this.whitelist.filter(listAddress => listAddress != address );
  }

  public isScanning(): Promise<{isScanning: boolean}>{
    return this.bluetoothle.isScanning();
  }

  public getDistance(address: string): Observable<number>{
    this.isFinding = true;
    let bluetoothSubsc = this.bluetoothle.connect({address: address}).subscribe(async connected => {
      while(this.isFinding){
        this.bluetoothle.rssi({address: address}).then(rssi => {
          this.distance.next(this.calculateDistance(rssi.rssi, -40));
          }).catch(err => {
            bluetoothSubsc.unsubscribe();
            console.log('rssi error');
          });
        await this.delay(500);
      }
    });
    return this.distance.asObservable();
  }

  public stopFinding(){
    console.log("STOP");
    this.isFinding=false;
  }

  private calculateDistance(rssi: number, txPowerLevel: number){
    return 10 ** ((rssi - txPowerLevel)/-20);
  }

  private addToTrackers(tracker: Tracker){
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

  private isInWhiteList(address: string){
    return this.whitelist.includes(address);
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
