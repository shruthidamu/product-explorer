import { Component, inject } from '@angular/core';
import { UsersStore } from '../store/users.store';
import { NgStyle, NgClass } from '@angular/common';
import { SorListPipe } from '../pipes/sor-list.pipe';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgStyle, NgClass, SorListPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  readonly userStore = inject(UsersStore);
  readonly usersList = this.userStore.users;
  ngOnInit():void {
    this.userStore.loadUsers();
  }
  usersdemo= [
    {name: 'Dennis', age: 21},
    {name: 'Matt', age: 33},
    {name: 'Adam', age: 21}
  ]

  onClickAdd() {
    this.usersdemo = [...this.usersdemo, {name: 'Ben', age: 45}]
  }
}
