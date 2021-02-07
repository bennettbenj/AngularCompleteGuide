import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private activeToInactive = 0;
  private inactiveToActive = 0


  incActiveToInactive(){
    this.activeToInactive++;
    console.log("Active to Inactive: " + this.activeToInactive);
  }

  incInactiveToActive(){
    this.inactiveToActive++;
    console.log("Inactive to Active: " + this.inactiveToActive);
  }
}
