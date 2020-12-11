import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  displayText = false;
  clicks = [];
  currentParagraph = 0;

  onButtonClick(){
    this.displayText = !this.displayText;
    this.clicks.push("1");
    this.currentParagraph++;
  }

  past5thParagraph(){
    if(this.currentParagraph > 4) return 'blue'
    else return null;
  }
}
