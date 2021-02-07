import { EventEmitter, Injectable, Output } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  
  public accounts: {name: string, status: string}[] = [{
    name: 'Master Account',
    status: 'active'
  },
  {
    name: 'Testaccount',
    status: 'inactive'
  },
  {
    name: 'Hidden Account',
    status: 'unknown'
  }];

  constructor() { }

  addAccount(newAccount: {name: string, status: string}){
    this.accounts.push(newAccount);
    console.log('A server status changed, new status: ' + newAccount.status);
  }

  changeStatusOfAccount(updateAccount: {id: number, status: string}){
    this.accounts[updateAccount.id].status = updateAccount.status;
    console.log('A server status changed, new status: ' + updateAccount.status);
  }
}
