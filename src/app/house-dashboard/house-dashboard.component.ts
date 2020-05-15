import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Task } from '../register/Task';
import { TasksService } from '../tasks/tasks.service';
import { Subscription } from 'rxjs';
import { HouseUserService } from '../house/house-users/house-user.service';
import { House } from '../house/House';

@Component({
  selector: 'app-house-dashboard',
  templateUrl: './house-dashboard.component.html',
  styleUrls: ['./house-dashboard.component.scss']
})
export class HouseDashboardComponent implements OnInit {

  currentUser;
  currentHouse: House;
  taskList: Task[];
  taskSubscription = new Subscription();
  houseUsers;

  constructor(private dashService: DashboardService, 
              private taskService: TasksService, 
              private houseUserService: HouseUserService) {}

  ngOnInit(): void {
    this.dashService.getCurrentUser().subscribe((data) => {
      console.log("Current house dash user ", data);
      this.currentUser = data; 
      this.dashService.getCurrentHouse(this.currentUser.house).subscribe((data: House) => {
        console.log("Current house on house dash", data);
        this.currentHouse = data;
      });
      this.houseUsers = this.houseUserService.getHouseUsers(this.currentUser.house);
      console.log("Dash house users: ", this.houseUsers);
    });
    this.taskService.taskSubject.subscribe((data) => {
      console.log("Lista de tareas: ", data);
      this.taskList = data;
    });
  }

}
