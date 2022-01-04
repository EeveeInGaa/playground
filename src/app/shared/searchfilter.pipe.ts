import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.interface';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(todos: Todo[], searchValue: string): Todo[] {
    if (!todos || !searchValue) {
      return todos;
    }
    return todos.filter(
      (t) =>
        t.id
          .toString()
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        t.userId
          .toString()
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        t.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}
