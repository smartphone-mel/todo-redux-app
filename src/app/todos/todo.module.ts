import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// NgRx!
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo.reducer';

import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoFilterPipe } from './todo-filter.pipe';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
    TodoFilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot( { todos: todoReducer } )
  ],
  exports: [ TodoPageComponent ]
})
export class TodoModule { }
