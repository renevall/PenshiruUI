import { Law } from '../../models/law.model';
import * as fromLaws from '../actions/laws.action';

export interface LawState {
  data: Law[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: LawState = {
  data: [
    {
      _id: '5a887b7e0516c179e30c2952',
      index: 0,
      guid: '35a05206-a7dd-48e1-85af-c4a747a72234',
      isActive: true,
      name: 'fugiat nostrud nostrud',
      publish: 'Sat Jan 19 1985 18:13:17 GMT+0000 (UTC)'
    }
  ],
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

export const getLawsLoading = (state: LawState) => state.loading;
export const getLawsLoaded = (state: LawState) => state.loaded;
export const getLaws = (state: LawState) => state.data;
