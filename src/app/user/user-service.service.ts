import { Injectable } from '@angular/core';
import { User } from './User';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contact } from './Contact';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user: User;
  contacts: Contact[];
  userSubject: Subject<User>;
  contactSubject: Subject<Contact[]>;

  constructor(private http: HttpClient) {
    this.userSubject = new Subject<User>();
    this.contactSubject = new Subject<Contact[]>();
    this.loadUser();
  }

  getUser() {
    return new User(
      this.user.name,
      this.user.lastName,
      this.user.email,
      this.user.photo,
      this.user.phone,
      this.user.verified,
      this.user.house,
      this.user.uid
    );
  }

  getContacts() {
    return this.contacts.slice();
  }

  loadUser() {
    this.http.get(environment.url + '/user/me').subscribe((data: User) => {
      this.user = data;
      this.userSubject.next(this.getUser());
      this.loadContacts();
    }, (err: any) => {
      console.error(err);
    });
  }

  loadContacts() {
    const id = this.user.uid;
    this.http.get(environment.url + '/user/' + id + '/contacts').subscribe((data: Contact[]) => {
      this.contacts = data;
      this.contactSubject.next(this.getContacts());
    }, (err: any) => {
      console.error(err);
    });
  }

  updateUser(name, lastName, email, phone) {
    this.http.put(environment.url + '/user/me', {
      name,
      lastName,
      email,
      phone
    }).subscribe((data: User) => {
      this.user = data;
      this.userSubject.next(this.getUser());
    }, (err: any) => {
      console.error(err);
    });
  }

  newContact(name, lastName, email, phone, userId) {
    this.http.post(environment.url + '/contact', {
      userId,
      name,
      lastName,
      email,
      phone
    }).subscribe((data: Contact) => {
      this.contacts.push(data);
      this.contactSubject.next(this.getContacts());
    }, err => {
      console.error(err);
    });
  }

  updateContact(id, name, lastName, email, phone) {
    this.http.patch(environment.url + '/contact/' + id, {
      name,
      lastName,
      phone,
      email
    }).subscribe((data: Contact) => {
      this.loadContacts();
    }, err => {
      console.error(err);
    });
  }
}
