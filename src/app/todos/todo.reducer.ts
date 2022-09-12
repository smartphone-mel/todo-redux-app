import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';

import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('TodoMVC'),
  new Todo('Testing de TODO'),
  new Todo('NgRx con TODO'),
  new Todo('Integración de TODO'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.crearTodo, ( state, { texto } ) => [ ...state, new Todo(texto) ] ),
  on(actions.toogleTodo, ( state, { id } ) => {
    return state.map( todo => {
      if (todo.id === id)
        return {
          ...todo,
          completado: !todo.completado
        };
      else
        return todo;
    } )
  } ),
  on(actions.toogleAllTodo, ( state, { completado } ) => {
    return state.map( todo => {
      return {
        ...todo,
        //completado: completado
        completado
      };
    } )
  } ),
  on(actions.editarTodo, ( state, { id, texto } ) => {
    return state.map( todo => {
      if (todo.id === id)
        return {
          ...todo,
          //texto: texto
          texto
        };
      else
        return todo;
    } )
  } ),
  on(actions.borrarTodo, ( state, { id } ) => state.filter( x => x.id !== id ) ),
  on(actions.limpiarCompletados, ( state ) => state.filter( x => !x.completado) ),
)

export function todoReducer(state: Todo[] | undefined, action: Action) {
    return _todoReducer(state, action)
}
