import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = "";
  logged = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    let token = localStorage.getItem('token');
    if(token != '') {
      this.token = token;
      this.logged.next(true);
    } else {
      this.logged.next(false);
    }
   }
  
  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  public isLoggedIn(): boolean {
    const tokenData = this.getTokenData();
    console.log(tokenData);

    if(tokenData) {
      let log = tokenData.exp > Date.now() / 1000;
      this.logged.next(true);
      return log;
    } else {
      this.logged.next(false);
      return false;
    }
  }

  public getTokenData() {
    let payload;
    if (this.token) {
      payload = this.token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public login(email: string, password: string): Observable<any> {
    return this.http
               .post(environment.url + '/api/login', {email, password})
               .pipe(
                 map((data: any) => {
                  if(data.token) {
                    this.saveToken(data.token);
                    this.isLoggedIn();
                  }
                  return data;
                 })
               );
  }

  public logout() {
    this.token = '';
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/');
    this.logged.next(false);
  }

  public googleLogin(params) {
    console.log("Estoy en google login en angular");
    return this.http.get(environment.url + '/api/google/redirect', {params})
      .pipe(
        map((data: any) => {
          if(data.token) {
            this.saveToken(data.token);
            this.isLoggedIn();
          }
          return data;
         })
      );
  }
}
