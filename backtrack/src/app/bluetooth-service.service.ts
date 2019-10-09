import { Injectable } from '@angular/core';
import { Tracker } from './Tracker';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  mockTrackers = [];
  mockDistance: Observable<number> = of(10);

  constructor(private tracker: Tracker) { 
    //TODO: impl
  }


  public startScanning(): void{
    //TODO: impl
  }

  public stopScanning(): void{
    //TODO: impl
  }

  public getTrackers(): Tracker[]{
    return this.mockTrackers;
    //TODO: impl
  }

  public showDistance(tracker: Tracker): Observable<number>{
    return this.mockDistance;
  }

}
