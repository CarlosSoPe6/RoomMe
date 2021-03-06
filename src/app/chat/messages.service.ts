import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  user;
  historyMessages;

  userSubject = new BehaviorSubject<any>({});
  historySubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  loadUser() {
    this.http.get(environment.url + '/user/me').subscribe((data: any) => {
      console.log(data);
      this.user = {
        uid: data.uid,
        house: 27
      };
      this.userSubject.next(this.getUser());
    }, (err: any) => {
      console.error(err);
    });
  }

  loadMessages() {
    this.http.get(environment.url + '/api/chat/27').subscribe((data) => {
      this.historyMessages = data;
      this.historySubject.next(this.getHistory());
    }, (err: any) => {
      console.error(err);
    });
  }

  getUser() {
    return this.user;
  }

  getHistory() {
    return this.historyMessages;
  }
}
