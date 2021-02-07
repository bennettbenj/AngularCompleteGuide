import { Component, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private userService:UsersService){}

  onCreateAccount(name: string, status: string) {
    this.userService.addAccount({name, status})
  }
}
