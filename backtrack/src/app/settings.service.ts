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
    
    
    this.storage.set("whitelistvalue",JSON.stringify(this.whitelist));

  }

  addToBlacklist(trackerAddress: string){
    // add to blacklist and save to local storage
    this.storage.set("blacklistvalue",JSON.stringify(this.blacklist));
  }

  acceptTerms(){
    // set accepted terms to true and save to local storage
    this.storage.set("acceptTerms","true");
  }

  tutorialViewed(){
    // set hasViewedTutorial to true and save to local storage
    this.storage.set("tutorialViewed","true");
  }

  setBackgroundScanning(isEnabled: boolean){
    // you get the idea
    this.storage.set("setBackgroundScanning","true");
  }

  retrieveSettings(){
    // get all of the settings from local storage and set them
    this.storage.get("retrieveSettings","addToBlacklist");
    this.storage.get("retrienveSettings","acceptTerms");
    this.storage.get("retrieveSettings","addToWhiteList");
    this.storage.get("retrieveSettings","tutorialViewed");
    this.storage.get("retrieveSettings","setBackgroundScanning");
  }

}
