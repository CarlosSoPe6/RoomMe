import { Injectable } from '@angular/core';
import { User } from './User';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contact } from './Contact';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  searchUserId: number;

  users: User[];
  contacts: Contact[];
  userSubject: Subject<User[]>;
  contactSubject: Subject<Contact[]>;

  constructor(private http: HttpClient) {
    this.userSubject = new Subject<User[]>();
    this.contactSubject = new Subject<Contact[]>();
    this.fetchUsers();
  }

  getUsers() {
    return this.users.slice();
  }

  getContacts() {
    return this.contacts.slice();
  }

  fetchUsers() {
    this.http.get(environment.url + '/user').subscribe((users: User[]) => {
      this.users = users;
      this.userSubject.next(this.getUsers());
    });
  }

  loadContacts() {
    const id = this.searchUserId;
    this.http.get(environment.url + '/user/' + id + '/contacts').subscribe((data: Contact[]) => {
      this.contacts = data;
      this.contactSubject.next(this.getContacts());
    }, (err: any) => {
      console.error(err);
    });
  }
}
