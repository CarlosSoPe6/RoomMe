import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HouseUserService } from './house-user.service';


@Component({
  selector: 'app-house-users',
  templateUrl: './house-users.component.html',
  styleUrls: ['./house-users.component.scss']
})
export class HouseUsersComponent implements OnInit {

  @Input() houseId;
  @Input() owner;
  users: any[];
  filtrados: any[];
  houseUsers: any[];
  removedUsers: any[];
  search: string;
  selected;

  constructor(private userService: HouseUserService) { }

  ngOnInit(): void {
    this.filtrados = [];
    this.removedUsers = [];
    this.userService.userSubject.subscribe(
      (data) => {
        this.users = data;
        this.houseUsers = this.userService.getHouseUsers(this.houseId);
      }
    );

    this.userService.houseUserSubject.subscribe(
      (data) => {
        this.houseUsers = data;
      }
    );
    this.userService.loadUsers();
  }

  searchUsers() {
    this.filtrados = this.users.filter((item) => item.lastName.toUpperCase().includes(this.search.toUpperCase()) ||
                      item.name.toUpperCase().includes(this.search.toUpperCase()));
  }

  addUser() {
    this.userService.addUser(this.search);
  }

  removeUser(removeId) {
    this.userService.removeUser(removeId);
  }

}
