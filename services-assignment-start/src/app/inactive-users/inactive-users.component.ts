import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
 
  public users: string[] = this.usersService.inactiveUsers;

  constructor(private usersService: UsersService, private counterService: CounterService){}

  onSetToActive(id: number){
    this.usersService.setToActive(id);
    this.counterService.incInactiveToActive();
  }
}
