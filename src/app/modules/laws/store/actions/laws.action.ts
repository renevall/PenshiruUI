import { Action } from '@ngrx/store';
import { Law } from '../../models/law.model';

export const LOAD_LAWS = '[Laws] Load Laws';
export const LOAD_LAWS_FAIL = '[Laws] Load Laws Fail';
export const LOAD_LAWS_SUCCESS = '[Laws] Load Laws Success';

export class LoadLaws implements Action {
  readonly type = LOAD_LAWS;
}

export class LoadLawsFail implements Action {
  readonly type = LOAD_LAWS_FAIL;
  constructor(public payload: any) {}
}

export class LoadLawsSuccess implements Action {
  readonly type = LOAD_LAWS_SUCCESS;
  constructor(public payload: Law[]) {}
}

export type LawsAction = LoadLaws | LoadLawsFail | LoadLawsSuccess;
