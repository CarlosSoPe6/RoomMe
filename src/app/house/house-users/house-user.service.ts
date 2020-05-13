import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseUserService {

  users;
  houseUsers;
  removedUsers;

  userSubject = new BehaviorSubject<any[]>([]);
  houseUserSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    this.users = [];
    this.houseUsers = [];
    this.removedUsers = [];
    this.loadUsers();

   }

   loadUsers() {
     this.http.get('http://localhost:3000/user').subscribe(
       (data) => {
         this.users = data;
         this.userSubject.next(this.getUsers());
        },
       (err) => console.log(err)
     );
   }

   addUser(search) {
    this.users.filter((item) => {
      return (item.name + ' ' + item.lastName) === search && !this.houseUsers.includes(item);
    }).forEach((item) => this.houseUsers.push(item));
    this.houseUserSubject.next(this.houseUsers);
   }

   removeUser(id) {
    const indx = this.houseUsers.findIndex((item) => item.uid === id);
    this.removedUsers.push(this.houseUsers.splice(indx, 1)[0]);
    this.houseUserSubject.next(this.houseUsers);
   }

   getUsers(): any[] {
     return this.users.slice();
   }

   getHouseUsers(house): any[] {
    this.houseUsers = this.users.filter((item) => item.house === house);
    return this.houseUsers.slice();
   }

   updateUserHouse(houseId) {
     this.removedUsers.forEach((item) => {
      this.http.put('http://localhost:3000/user/houses', {uid : item.uid, house : -1}).subscribe(
        (data) => {
          console.log(data);
        }, (err) => {
          console.log(err);
        }
      );
     });
     this.houseUsers.forEach((item) => {
      this.http.put('http://localhost:3000/user/houses', {uid : item.uid, house : houseId}).subscribe(
        (data) => {
          console.log(data);
        }, (err) => {
          console.log(err);
        }
      );
     });

   }
}
