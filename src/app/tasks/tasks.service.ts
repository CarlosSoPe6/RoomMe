import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Task } from '../register/Task';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasksList: Task[];
  taskSubject = new Subject<Task[]>();
  currentUser;

  constructor(private http: HttpClient) {
    this.getCurrentUser().subscribe(
      (data) => {
        console.log("Current user: ", data);
        this.currentUser = data;
        this.getTasks(this.currentUser.house).subscribe(
          (data: Task[]) => {
            console.log("component task list: ", data);
            this.tasksList = data;
            console.log("Antes del subject en constructor ", this.tasksList);
            this.taskSubject.next(this.tasksList);
          }, (err) => console.log(err)
        );
      }, (err) => console.log(err)
    );
   }

  public getCurrentUser() {
    return this.http.get(environment.url + '/user/me');
  }

  public getTasks(houseId) {
    console.log("Voy a intentar consultar tareas");
    return this.http.get(environment.url + '/api/tasks/all/house/' + houseId);
  }

  public saveTask(desc): void {
    this.http.post(environment.url + '/api/tasks', {
      author : this.currentUser.uid,
      house : this.currentUser.house,
      description : desc
    }).subscribe(data => {
      console.log(data);
      this.getTasks(this.currentUser.house).subscribe(
        (data: Task[]) => {
          console.log("New task list", data);
          this.tasksList = data;
          this.taskSubject.next(this.tasksList);
        }, (err) => console.log(err)
      )
    });
  }

  public deleteTask(taskId) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body : {id : taskId}
    };
    this.http.delete(environment.url + '/api/tasks', httpOptions).subscribe(
      (data) => {
        console.log(data);
        console.log("Delete current user", this.currentUser);
        this.getTasks(this.currentUser.house).subscribe(
          (data: Task[]) => {
            console.log("New task list", data);
            this.tasksList = data;
            this.taskSubject.next(this.tasksList);
          }, (err) => console.log(err)
        )
      }
    )
  }
}
