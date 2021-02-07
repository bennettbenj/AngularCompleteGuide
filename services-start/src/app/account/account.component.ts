import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 
  constructor(private userService: UsersService){}

  onSetTo(newStatus: string) {
    this.userService.changeStatusOfAccount({id: this.id, status: newStatus}) 
  }
}
