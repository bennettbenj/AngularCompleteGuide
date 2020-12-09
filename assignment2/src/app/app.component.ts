import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName: String = '';


  isEmpty(): boolean{
    if(this.userName === '') return true;
    return false; 
  }

  resetUsername(){
  this.userName = '';
  }

}
