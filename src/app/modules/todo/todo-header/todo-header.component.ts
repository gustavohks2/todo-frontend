import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
   selector: 'todo-header',
   templateUrl: './todo-header.component.html',
   styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {

   @Output() createNewTaskButtonClicked = new EventEmitter();

   public ngOnInit(): void {}

   public createNewTask(): void {
      this.createNewTaskButtonClicked.emit(null);
   }
}
