import { Component } from '@angular/core';

@Component({
   selector: 'todo-todolist',
   templateUrl: './todolist.component.html',
   styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

   public todoTasksFakeData: any = [
      { finished: false, description: 'Go for a walk' },
      { finished: false, description: 'Eat an apple at eleven o’clock for dinner' },
      { finished: false, description: 'Take the dog out for a walk at the park tommorrow' },
      { finished: true, description: 'Make plans for the weekend' },
      { finished: false, description: 'Go shop at the supermarket, ‘cause there’s no food at all' },
      { finished: true, description: 'Call my girlfriend and tell her about our dog' },
      { finished: true, description: 'Make coffee every morning' },
      { finished: false, description: 'Go shop at the supermarket, ‘cause there’s no food' },
   ];

}
