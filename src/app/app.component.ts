import { Component } from '@angular/core';
import { TodosService } from './shared/services/todos.service';
import { Todo } from './shared/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testing-playground';

  todos: Todo[] | any = [];
  searchValue: string = '';

  constructor(private readonly todoService: TodosService) {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }
}
