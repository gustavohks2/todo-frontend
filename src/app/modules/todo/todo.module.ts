import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskGroupComponent } from './task-group/task-group.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TaskGroupListItemComponent } from './task-group/task-group-list-item/task-group-list-item.component';

@NgModule({
   declarations: [
      TaskGroupComponent,
      TaskItemComponent,
      TodoHeaderComponent,
      TodolistComponent,
      TaskGroupListItemComponent
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
