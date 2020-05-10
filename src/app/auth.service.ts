import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = "";

  constructor() { }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  public isLoggedIn(): boolean {
    const tokenData = this.getTokenData();
    console.log(tokenData);

    if(tokenData) {
      return tokenData.exp > Date.now() / 1000;
    } else {
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
}
