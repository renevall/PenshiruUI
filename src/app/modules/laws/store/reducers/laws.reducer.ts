import { Law } from '../../models/law.model';
import * as fromLaws from '../actions/laws.action';

export interface LawState {
  data: Law[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: LawState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromLaws.LawsAction
): LawState {
  switch (action.type) {
    case fromLaws.LOAD_LAWS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromLaws.LOAD_LAWS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromLaws.LOAD_LAWS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}
