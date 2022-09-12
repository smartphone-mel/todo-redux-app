import { createAction, props } from '@ngrx/store';

export type validFilters = 'Todas' | 'Terminadas' | 'Activas' | undefined;

export const setFilter = createAction(
        '[TODO] setFilter',
        props< { filter: validFilters } >()
    );
