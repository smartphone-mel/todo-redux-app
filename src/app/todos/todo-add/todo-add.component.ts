import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(
    private _store: Store<AppState>
  ) {
    this.txtInput = new FormControl('', Validators.required)
  }

  ngOnInit(): void {
    this.txtInput_customReset()
  }

  agregar() {
    if (!this.txtInput.valid)
      return;

    this._store.dispatch(
        actions.crearTodo( { texto: this.txtInput.value } )
      );

    //this.txtInput.reset();
    this.txtInput_customReset()
  }

  txtInput_customReset() {
    this.txtInput.setValue('Tarea a listar...')
  }
}
