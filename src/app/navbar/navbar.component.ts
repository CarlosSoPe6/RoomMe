import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logged = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logged.subscribe((val) => {
      console.log(`De log ${this.logged} a ${val}`)
      this.logged = val;});
  }

  logout() {
    this.authService.logout();
  }

}
