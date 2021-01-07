import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  private ref;
  private increment = 1;
  @Input() numbersArray = [];
  
  @Output() incrementEvent = new EventEmitter<number>();

  ngOnInit(): void {
  }

  incrementTimer(){
    this.numbersArray.push(this.increment++)
    this.incrementEvent.emit();
  }

  startTimer(){
      this.ref = setInterval(() => {
      this.numbersArray.push(this.increment);
      this.incrementEvent.emit(this.increment++);
    }, 1000);
  }

  stopTimer(){
    clearInterval(this.ref);
  }
}
