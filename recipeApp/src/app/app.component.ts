import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() buttonPressed;

  title = 'recipeApp';

  updateButtonPressed($event){
    this.buttonPressed = $event;
    console.log($event);
  }
}
