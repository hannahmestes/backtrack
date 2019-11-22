import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public whitelist: {name:string,address:string}[]; //addresses of trackers in whitelist
  public blacklist: {name:string, address:string}[]; //addresses of trackers in blacklist
  public hasAcceptedTerms: boolean;
  public hasViewedTutorial: boolean;
  public backgroundScanningEnabled: boolean;
  

  
  
  constructor(private storage: Storage) {
    this.retrieveSettings();
   }

  addToWhitelist(name:string,trackerAddress: string){
    // add to array and save to local storage
    this.whitelist.push({name:name, address:trackerAddress})
    
    
    
    
    this.storage.set("whitelistvalue",JSON.stringify(this.whitelist));

  }

  addToBlacklist(trackerAddress: string){
    // add to blacklist and save to local storage
    this.blacklist.push({name:name, address:trackerAddress})
    
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
    this.storage.get("blacklistvalue").then(val => {
      if (val==null)
        this.blacklist=[];
      else
        this.blacklist= JSON.parse(val);
    });
    this.storage.get("acceptTerms").then (val=> {
      if (val==null)
      this.hasAcceptedTerms=false;
    else
      
      this.hasAcceptedTerms= JSON.parse(val);
    });
    this.storage.get("whitelistvalue").then (val=> {
      if (val==null)
      this.whitelist=[];
    else
      
      this.whitelist= JSON.parse(val);
    });
    this.storage.get("tutorialViewed").then (val=> {
      if (val==null)
      this.hasViewedTutorial=false;
    else
      
      this.hasViewedTutorial= JSON.parse(val);
    });
    this.storage.get("setBackgroundScanning").then (val=> {
      if (val==null)
      this.backgroundScanningEnabled=false;
    else
      
      this.backgroundScanningEnabled= JSON.parse(val);
    });
  }

}
