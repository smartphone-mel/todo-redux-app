import { Action, createReducer, on } from '@ngrx/store';
import { validFilters } from './filter.actions';

import * as actions from './filter.actions';

export const initialState: validFilters = 'Todas';

const _filterReducer = createReducer(
    initialState as validFilters,
    on(actions.setFilter, ( state, { filter } ) => filter ),
);

export function filterReducer(state: validFilters, action: Action) {
    return _filterReducer(state, action)
}
