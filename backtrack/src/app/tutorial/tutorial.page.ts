import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(private router: Router) {
    SettingsService.hasViewedTutorial = false;
   }

  ngOnInit() {
  }

  ReadTutorial() {
    SettingsService.hasViewedTutorial = true;
    this.router.navigate(['/tabs/tab1']);
  }

}
