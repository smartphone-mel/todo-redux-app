import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case 'Terminadas':
        return todos.filter(x => x.completado);
      case 'Activas':
        return todos.filter(x => !x.completado);
      default: // 'Todas'
        return todos;
    }
  }

}
