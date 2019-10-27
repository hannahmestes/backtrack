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
  color: number;

  constructor() {
    this.name = 'Tile';
    this.distance = 10;
   }

  ngOnInit() {
    }


}

function colorCircle(distance){
  if (distance > 10){
    console.log('0');
    return 0;//red
  }
  else if (distance <= 10 && distance > 2){
    console.log('1');
    return 1;//yellow
  }
  else if (distance <= 2){
    console.log('2');
    return 2;//green
  }
  //else{
    //return console.error();
  //}
}
