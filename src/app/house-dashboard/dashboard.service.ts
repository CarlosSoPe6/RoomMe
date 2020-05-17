import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TasksService } from '../tasks/tasks.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient, private taskService: TasksService) { }

  public getCurrentUser() {
    return this.http.get(environment.url + '/user/me');
  }

  public getCurrentHouse() {
    return this.http.get(environment.url + '/house');
  }

  public getTasks(houseId) {
    return this.taskService.getTasks(houseId);
  }

}
