import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Subscription } from 'rxjs';
import { User } from '../User';
import { Contact } from '../Contact';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  // User info
  user: User;
  name = '';
  lastName = '';
  username = '';
  email = '';
  phone = '';
  emergencyContacts = [];

  // Contact input
  showInput = false;

  constructor(private userService: UserServiceService) {
    this.userService.userSubject.subscribe(this.onUserChange.bind(this));
    this.userService.contactSubject.subscribe(this.onContactsChange.bind(this));
  }

  ngOnInit(): void {

  }

  onUserChange(data: User) {
    this.user = data;
    this.name = this.user.name;
    this.lastName = this.user.lastName;
    this.email = this.user.email;
    this.phone = this.user.phone;
  }

  onContactsChange(data: Contact[]) {
    this.emergencyContacts = data;
  }

  onSaveChanges() {
    this.userService.updateUser(
      this.name,
      this.lastName,
      this.email,
      this.phone
    );
  }

  onDiscarChanges() {
    this.name = this.user.name;
    this.lastName = this.user.lastName;
    this.email = this.user.email;
    this.phone = this.user.phone;
  }

  onNewContact() {

  }

}
