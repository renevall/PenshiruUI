import { ActionReducerMap } from '@ngrx/store';

import * as fromLaws from './laws.reducer';

export interface DocumentsState {
  laws: fromLaws.LawState;
}

export const reducers: ActionReducerMap<DocumentsState> = {
  laws: fromLaws.reducer
};
