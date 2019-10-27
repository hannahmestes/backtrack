import { Component, OnInit } from '@angular/core';
import { ɵTestingCompiler } from '@angular/core/testing';

@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.page.html',
  styleUrls: ['./find-page.page.scss'],
})
export class FindPagePage implements OnInit {
  id: string;
  distance: number;
  name: string;
  colorRed: boolean;
  colorYellow: boolean;
  colorGreen: boolean;

  constructor() {
    this.name = 'Tile';
    this.distance = 7;
    this.colorCircle(this.distance);
   }

  ngOnInit() {
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
    // else{
      // return console.error();
    // }
  }

}


