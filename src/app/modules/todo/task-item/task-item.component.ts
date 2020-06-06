import { Component, Input } from '@angular/core';
import { Task } from 'src/app/shared/models/task';

@Component({
   selector: 'todo-task-item',
   templateUrl: './task-item.component.html',
   styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

   @Input() task: Task;

   public get checkboxId() {
      return `cbx${this.task.id}`;
   }
}
