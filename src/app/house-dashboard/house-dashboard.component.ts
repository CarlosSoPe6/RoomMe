import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TasksService } from '../tasks/tasks.service';
import { Task } from '../register/Task';
import { DashboardService } from './dashboard.service';
import { Subscription } from 'rxjs';
import { HouseUserService } from '../house/house-users/house-user.service';
import { House } from '../house/House';

@Component({
  selector: 'app-house-dashboard',
  templateUrl: './house-dashboard.component.html',
  styleUrls: ['./house-dashboard.component.scss']
})
export class HouseDashboardComponent implements OnInit {

  calendarPlugins = [dayGridPlugin]; // important!
  taskList: Task[];
  currentUser;
  currentHouse: House;
  taskSubscription = new Subscription();
  houseUsers;

  constructor(private dashService: DashboardService, 
              private taskService: TasksService, 
              private houseUserService: HouseUserService) {}

  ngOnInit(): void {
    this.dashService.getCurrentUser().subscribe((userData) => {
      console.log('Current house dash user ', userData);
      this.currentUser = userData;
      this.dashService.getCurrentHouse().subscribe((houseData: House) => {
        console.log('Current house on house dash', houseData);
        this.currentHouse = houseData;
      });
      this.houseUsers = this.houseUserService.getHouseUsers(this.currentUser.house);
      console.log('Dash house users: ', this.houseUsers);
    });

    this.taskService.taskSubject.subscribe((data) => {
      console.log('Lista de tareas: ', data);
      this.taskList = data;
    });
  }

}
