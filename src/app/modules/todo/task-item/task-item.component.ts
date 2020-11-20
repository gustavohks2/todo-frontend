import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Task } from 'src/app/shared/models/task';

@Component({
   selector: 'todo-task-item',
   templateUrl: './task-item.component.html',
   styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements AfterViewInit {

   @Input() task: Task;
   @ViewChild('inTempTask', { static: false }) inTempTask: ElementRef;
   @Output() blurredTempTaskInput = new EventEmitter();

   public ngAfterViewInit(): void {
      if (this.inTempTask) {
         this.inTempTask.nativeElement.focus();
      }
   }

   public get checkboxId(): string {
      return `cbx${this.task.id}`;
   }

   public notifyInputTaskWasBlurred = (): void => this.blurredTempTaskInput.emit(this.task);

   public markTaskAsFinished = () => {
      this.task.finished = !this.task.finished;
   }

   public openTaskItemMenuOptions(): void {

   }
}
