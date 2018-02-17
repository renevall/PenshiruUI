import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromLaws from './laws.reducer';

export interface DocumentsState {
  laws: fromLaws.LawState;
}

export const reducers: ActionReducerMap<DocumentsState> = {
  laws: fromLaws.reducer
};

export const getDocumentsState = createFeatureSelector<DocumentsState>(
  'documents'
);

// Law state

export const getLawState = createSelector(
  getDocumentsState,
  (state: DocumentsState) => state.laws
);

export const getAllPizzas = createSelector(getLawState, fromLaws.getLaws);
export const getLawsLoaded = createSelector(
  getLawState,
  fromLaws.getLawsLoaded
);
export const getLawsLoading = createSelector(
  getLawState,
  fromLaws.getLawsLoading
);
