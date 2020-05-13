import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailService } from '../user-detail.service';
import { Contact } from '../Contact';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id: number;
  // User info
  user: User;
  name = '';
  lastName = '';
  username = '';
  email = '';
  phone = '';
  photo = '';
  emergencyContacts = [];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserDetailService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.userService.userSubject.subscribe((array: User[]) => {
        const data = array.find((user, index) => {
          // tslint:disable-next-line: triple-equals
          if (user.uid == this.id) {
            return true;
          }
          return false;
        });
        this.name = data.name;
        this.lastName = data.lastName;
        this.phone = data.phone;
        this.photo = data.photo;
        this.email = data.email;
      });
      this.userService.searchUserId = this.id;
      this.userService.loadContacts();
      this.userService.contactSubject.subscribe((data: Contact[]) => {
        this.emergencyContacts = data;
      })
    });
  }
}
