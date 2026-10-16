import { Component, inject } from '@angular/core';
import { UsersStore } from '../store/users.store';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  readonly userStore = inject(UsersStore);
  readonly usersList = this.userStore.users;
  ngOnInit():void {
    this.userStore.loadUsers();
  }
}
