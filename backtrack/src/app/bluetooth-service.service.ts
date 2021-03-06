import { Injectable } from '@angular/core';
import { Tracker } from './Tracker';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { Platform } from '@ionic/angular';
import { map, tap } from 'rxjs/operators';
import { SettingsService } from './settings.service';


@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  trackerUUIDs = ['FEED', 'FEEC', 'FE33', 'FE65'];
  trackers: BehaviorSubject<Tracker[]> = new BehaviorSubject([]);
  distance: BehaviorSubject<number> = new BehaviorSubject(-1);
  isFinding= false;
  tileTxPower = -55;
  maxDistance: number;

  // initializes bluetooth function
  constructor(private bluetoothle: BluetoothLE, public plt: Platform, private settings: SettingsService) { 
    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      this.bluetoothle.initialize().subscribe(ble => {
        console.log('ble', ble.status) // logs 'enabled'
      }, err => console.log(err));
    });
  }

  ngOnInit(){
    this.maxDistance = this.settings.maxDistance;
    console.log("MAX DISTANCE", this.maxDistance)
  }

  // starts scan, adds non-whitelisted devices to trackers
  public startScanning(): void{
    this.bluetoothle.startScan({ services: [] }).subscribe(scanStatus => {   
      if(typeof scanStatus.advertisement !== 'string'){ // check that device is iOS
        if(scanStatus.advertisement && scanStatus.advertisement.serviceUuids){ // check that device is broadcasting required information
          if(this.isInTrackerList(scanStatus.advertisement.serviceUuids) && !this.isInWhiteList(scanStatus.address)){
            let distance = this.calculateDistance(scanStatus.rssi, this.tileTxPower);
            if(distance < this.settings.maxDistance){
              let tracker = new Tracker(scanStatus.name, scanStatus.name, this.tileTxPower, scanStatus.address, distance);
              this.addToTrackers(tracker);
            }
          }
        }
      }
      else{
        console.log("Android not yet implemented");
      }
    }, err => console.log("ERROR:", JSON.stringify(err)));
  }

  // stops scan and resets tracker list
  public stopScanning(): void{
    this.bluetoothle.stopScan();
    this.trackers.next([]);
  }

  public getTrackers(): Observable<Tracker[]>{
    return this.trackers;
  }

  public addToWhitelist(address: string, name: string): void{
    this.settings.addToWhitelist(name, address);
  }

  public isScanning(): Promise<{isScanning: boolean}>{
    return this.bluetoothle.isScanning();
  }

  public getDistance(address: string): Observable<number>{
    let distance = new BehaviorSubject(0);
    this.isFinding = true;
    console.log("Connecting...");
    let bluetoothSubsc = this.bluetoothle.connect({address: address}).subscribe(async connected => {
      while(this.isFinding){
        this.bluetoothle.rssi({address: address}).then(rssi => {
          distance.next(this.calculateDistance(rssi.rssi, this.tileTxPower));
          }).catch(err => { // connection to bluetooth device has been lost
            this.isFinding = false;
            distance.next(-1);
            console.log('rssi error: ', JSON.stringify(err));
          });
        await this.delay(500);
      }
    }, err => console.log('connectionError: ', JSON.stringify(err)));
    return distance.asObservable();
  }

  public stopFinding(){
    this.isFinding=false;
  }

  private calculateDistance(rssi: number, txPowerLevel: number){
    return 10 ** ((txPowerLevel - rssi)/40);
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
    return this.settings.whitelist.some(device => device.address == address);
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
