import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TasksService } from '../tasks/tasks.service';
import { Task } from '../register/Task';

@Component({
  selector: 'app-house-dashboard',
  templateUrl: './house-dashboard.component.html',
  styleUrls: ['./house-dashboard.component.scss']
})
export class HouseDashboardComponent implements OnInit {

  calendarPlugins = [dayGridPlugin]; // important!

  taskList: Task[];

  constructor(private taskService: TasksService) {
    this.taskService.taskSubject.subscribe((data) => {
      this.taskList = data;
    });
  }

  ngOnInit(): void {
  }

}
