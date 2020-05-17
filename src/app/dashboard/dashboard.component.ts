import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TasksService } from '../tasks/tasks.service';
import { Task } from '../register/Task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
