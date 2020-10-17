import { Component, OnInit } from '@angular/core';
import { usersData } from '../users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: any = [];
  constructor() {}

  ngOnInit(): void {
    this.users = usersData;
  }
}
