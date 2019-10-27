import { Component, OnInit } from '@angular/core';
import { BluetoothService } from '../bluetooth-service.service';
import { Tracker } from '../Tracker';

@Component({
  selector: 'app-find-tracker',
  templateUrl: './find-tracker.page.html',
  styleUrls: ['./find-tracker.page.scss'],
})
export class FindTrackerPage implements OnInit {

  distance: number;
  tracker: Tracker;
  
  constructor(bluetoothService: BluetoothService) { }

  ngOnInit() {
  }

}
