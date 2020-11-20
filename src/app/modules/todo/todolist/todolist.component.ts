import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/shared/models/task';

@Component({
   selector: 'todo-todolist',
   templateUrl: './todolist.component.html',
   styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

   private readonly UNSAVED_TASK_DEFAULT_ID = 0;
   tasks: Task[];

   constructor(private taskService: TaskService) {
      this.updateTasks();
   }

   public todoTasksFakeData: any = [
      { id: 1, finished: false, description: 'Go for a walk' },
      { id: 2, finished: false, description: 'Eat an apple at eleven o’clock for dinner' },
      { id: 3, finished: false, description: 'Take the dog out for a walk at the park tommorrow' },
      { id: 4, finished: true, description: 'Make plans for the weekend' },
      { id: 5, finished: false, description: 'Go shop at the supermarket, ‘cause there’s no food at all' },
      { id: 6, finished: true, description: 'Call my girlfriend and tell her about our dog' },
      { id: 7, finished: true, description: 'Make coffee every morning' },
      { id: 8, finished: false, description: 'Go shopping at the supermarket, ‘cause there’s no food' },
   ];

   public createNewTask(): void {
      if (!this.tasks.some(task => task.id === this.UNSAVED_TASK_DEFAULT_ID)) {
         this.tasks.push({ id: 0, finished: false, description: '', isTemp: true } as Task);
      }
   }

   private updateTasks() {
      this.taskService.getAllTasks()
         .subscribe(
            tasks => this.tasks = tasks,
            err => this.tasks = this.todoTasksFakeData);
   }

   public deleteTempTaskIfInvalid(tempTask: Task): void {
      if (tempTask.description.trim().length === 0) {
         this.tasks =  this.tasks.filter(task => task.id !== this.UNSAVED_TASK_DEFAULT_ID);
      }
   }
}
