import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { validFilters } from '../../filter/filter.actions';
import * as filter_actions from '../../filter/filter.actions';
import * as todo_actions from '../todo.actions';

import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filterSelected: validFilters = 'Todas';
  filters: validFilters[] = ['Todas', 'Terminadas', 'Activas'];
  pendientes: number = 0;

  constructor(
    private _store: Store<AppState>
  ) {
    //this._store.select('filter')
    //  .subscribe( filter => this.filterSelected = filter );
    this._store
      .subscribe( ( {filter, todos} ) => {
        this.filterSelected = filter;
        this.pendientes = todos.filter( x => !x.completado ).length;
      } );
  }

  ngOnInit(): void {
  }

  cambiarFiltro(filter: validFilters) {
    this._store.dispatch(
        filter_actions.setFilter( { filter } )
      );
  }

  limpiarCompletados() {
    this._store.dispatch( todo_actions.limpiarCompletados() )
  }
}
