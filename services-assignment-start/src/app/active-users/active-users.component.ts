import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
 
  public users: string[] = this.usersService.activeUsers;

  constructor(private usersService: UsersService, private counterService: CounterService){}

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.counterService.incActiveToInactive();
  }
}
