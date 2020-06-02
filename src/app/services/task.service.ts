import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../models/task';
import { environment as env } from '../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class TaskService {

   private static readonly TASK_API = `${env.mainServerAPI}/tasks`;

   constructor(private http: HttpClient) { }

   getAllTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(TaskService.TASK_API);
   }
}
