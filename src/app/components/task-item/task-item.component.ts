import { Component, Input } from '@angular/core';

@Component({
   selector: 'todo-task-item',
   templateUrl: './task-item.component.html',
   styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

   @Input() task: any;

}
