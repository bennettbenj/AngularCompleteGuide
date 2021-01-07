import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() headerButtonEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  openRecipes(){
    this.headerButtonEvent.emit(0);
  }

  openShoppingList(){
    this.headerButtonEvent.emit(1);
  }
}
