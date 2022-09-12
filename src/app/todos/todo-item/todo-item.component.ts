import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// NgRx!
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo('');
  @ViewChild('txtInput_html') txtInput_html: ElementRef = new ElementRef(HTMLElement);

  chkCompletado: FormControl;
  txtInput: FormControl;

  modo_edicion = false;

  constructor(
    private _store: Store<AppState>
  ) {
    this.chkCompletado = new FormControl( false );
    this.txtInput = new FormControl( 'Create a TodoMVC template', Validators.required );
  }

  ngOnInit(): void {
    this.chkCompletado.setValue(this.todo.completado);
    this.txtInput.setValue(this.todo.texto);

    this.chkCompletado.valueChanges
      .subscribe(
        valor => { this._store.dispatch(
            actions.toogleTodo( { id: this.todo.id } )
          ) }
      );
  }

  editar() {
    this.modo_edicion = true;
    this.txtInput.setValue(this.todo.texto);
    
    setTimeout( () => {
        this.txtInput_html.nativeElement.select(); // focus()
      }, 1);
  }

  borrar() {
    this._store.dispatch(
        actions.borrarTodo( { id: this.todo.id } )
      );
  }

  deseditar() {
    this.modo_edicion = false;
  }

  guardar() {
    switch (true) {
      case (!this.txtInput.valid):
        alert('Error al editar TODO.')
        break;
      case (this.txtInput.value === this.todo.texto):
        alert('El texto del TODO es igual al anterior.')
        break;
      default:
        this._store.dispatch(
            actions.editarTodo( {
              id: this.todo.id
              , texto: this.txtInput.value
            } )
          );
    }
  }
}
