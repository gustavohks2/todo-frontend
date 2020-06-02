import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskGroupComponent } from './task-group/task-group.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
   declarations: [
      TaskGroupComponent,
      TaskItemComponent,
      TodoHeaderComponent,
      TodolistComponent
   ],
   imports: [
      CommonModule
   ],
   exports: [
      TaskGroupComponent,
      TaskItemComponent,
      TodoHeaderComponent,
      TodolistComponent
   ]
})
export class TodoModule { }
