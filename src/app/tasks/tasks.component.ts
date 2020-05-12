import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { Task } from '../register/Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  taskList: Task[];
  taskSubscription = new Subscription();
  newTask = "";

  constructor(private taskService: TasksService) {
    this.taskService.taskSubject.subscribe((data) => {
      console.log("Lista de tareas: ", data);
      this.taskList = data;
    });
   }

  ngOnInit(): void {
    
  }

  public removeTask(taskId): void {
    this.taskService.deleteTask(taskId);
  }

  public addTask(): void {
    this.taskService.saveTask(this.newTask);
  }

}
