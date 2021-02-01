import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment as env } from '../../environments/environment';
import { Task } from '../shared/models/task';

@Injectable({
   providedIn: 'root'
})
export class TaskService {

   private static readonly TASK_API = `${env.mainServerAPI}/tasks`;

   constructor(private http: HttpClient) { }

   public getAllTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(TaskService.TASK_API);
   }

   public saveTask(task: Task): Observable<Task> {
      return this.http.post<Task>(TaskService.TASK_API, task);
   }
}
