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

  constructor(private readonly todoService: TodosService) {
    this.todoService.getTodos().subscribe((data) => {
      console.log(data);
      this.todos = data;
    });
  }
}
