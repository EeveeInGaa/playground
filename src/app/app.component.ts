import { Component } from '@angular/core';
import { TodosService } from './shared/services/todos.service';
import { Todo } from './shared/todo.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testing-playground';

  todos: Todo[] | any = [];
  searchValue: string = '';

  numbers: number[] = [];
  strings: string[] = ['hallo', 'hi', 'hey', 'hej', 'hola'];

  constructor(private readonly todoService: TodosService) {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data; //the data from the api are getting attached to the array to display the data
    });
    for (let i = 0; i < 11; i++) {
      this.numbers.push(i);
    }
  }

  drop(event: CdkDragDrop<number[] | string[]>) {
    moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    moveItemInArray(this.strings, event.previousIndex, event.currentIndex);
  }
}
