import { Component, OnInit } from '@angular/core';
import { ɵTestingCompiler } from '@angular/core/testing';

@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.page.html',
  styleUrls: ['./find-page.page.scss'],
})
export class FindPagePage implements OnInit {
name: string;

  constructor() {
   }

  ngOnInit() {
    
  }

  public createDevice(id: string){
    let testing = new device("001");
    testing.color = colorCircle(testing.distance);
    console.log(testing.getID());
    console.log(testing.name);
    console.log(testing.distance);
  }
  public getName(){
    return "Tile";
  }

}

export class device {
  id: string;
  distance: number;
  name: string;
  color: number;
  constructor(id: string) {
    this.id = id;
    this.distance = 10; //testing
    this.name = "Tile"; //testing
  }

  public getID(){
    return this.id;
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
