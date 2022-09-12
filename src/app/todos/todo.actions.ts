import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
        '[TODO] CrearTodo',
        props< { texto: string } >()
    );

export const toogleTodo = createAction(
        '[TODO] toogleTodo',
        props< { id: number } >()
    );

export const toogleAllTodo = createAction(
        '[TODO] toogleAllTodo',
        props< { completado: boolean } >()
    );

export const editarTodo = createAction(
        '[TODO] editarTodo',
        props< { id: number, texto: string } >()
    );

export const borrarTodo = createAction(
        '[TODO] borrarTodo',
        props< { id: number } >()
    );

export const limpiarCompletados = createAction(
        '[TODO] limpiarCompletados'
    );
