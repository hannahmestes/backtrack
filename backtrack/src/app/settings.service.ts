import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public whitelist: string[]; //addresses of trackers in whitelist
  public blacklist: string[]; //addresses of trackers in blacklist
  public hasAcceptedTerms: boolean;
  public hasViewedTutorial: boolean;
  public backgroundScanningEnabled: boolean;


  constructor(private storage: Storage) {
    this.retrieveSettings();
   }

  addToWhitelist(trackerAddress: string){
    // add to array and save to local storage
  }

  addToBlacklist(trackerAddress: string){
    // add to blacklist and save to local storage
  }

  acceptTerms(){
    // set accepted terms to true and save to local storage
  }

  tutorialViewed(){
    // set hasViewedTutorial to true and save to local storage
  }

  setBackgroundScanning(isEnabled: boolean){
    // you get the idea
  }

  retrieveSettings(){
    // get all of the settings from local storage and set them
  }

}