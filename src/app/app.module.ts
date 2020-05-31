import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { RippleEffectDirective } from './shared/ripple-effect/ripple-effect.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodolistComponent,
    TaskItemComponent,
    RippleEffectDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
