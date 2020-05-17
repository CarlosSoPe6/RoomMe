import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user/user-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarCollapsed = false;
  user = null; 
  houseId = 1;

  constructor(private userService: UserServiceService) {
    this.userService.userSubject.subscribe((user) => {
      console.log("Usuario para sidebar ", user);
      this.user = user;
      this.houseId = user.house;
    });
  }

  ngOnInit(): void {

  }

  sidebarToggle() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
