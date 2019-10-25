import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

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

function appendList() {
  this.newItem = "<ion-item class= 'listin'>";
  this.newItem = "<button (click)='find()' class= 'butt'>";
  this.newItem = "<ion-icon slot= 'start' color= 'medium' name= 'analytics'></ion-icon>";
  this.newItem = "number";
  this.newItem = "</button>";
  this.newItem = "</ion-item>";
} 

let test = new device("5550123");

