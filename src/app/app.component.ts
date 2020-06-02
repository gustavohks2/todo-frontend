import { Component } from '@angular/core';

@Component({
   selector: 'todo-root',
   template: `
      <main class="main-centered-container">
         <section class="todo-task-group-container">
            <todo-task-group></todo-task-group>
            <todo-settings-button></todo-settings-button>
         </section>
         <section class="todolist-and-settings-container">
            <header class="todo-header">
               <todo-header></todo-header>
            </header>
            <div class="todolist-container">
               <todo-todolist></todo-todolist>
            </div>
         </section>
      </main>
  `
})
export class AppComponent { }
