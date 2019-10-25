import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  btnClicked(){
    window.open("https://www.domesticshelters.org/help#?page=1", "_system", "location=yes");
  }

  redirect(){
    window.open("https://www.safehorizon.org/get-help/stalking/#overview/", "_system", "location=yes");
  }

  constructor() {}

}
