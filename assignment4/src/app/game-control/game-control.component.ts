import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  private ref;
  private increment = 1;
  @Output() incrementEvent = new EventEmitter<number>();

  ngOnInit(): void {
  }

  incrementTimer(){
    this.incrementEvent.emit(this.increment++);
  }

  startTimer(){
    this.ref = setInterval(this.incrementTimer, 1000);
  }

  stopTimer(){
    clearInterval(this.ref);
  }
}
