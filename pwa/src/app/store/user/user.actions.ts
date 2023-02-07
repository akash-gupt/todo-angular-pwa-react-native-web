import { createAction, props } from '@ngrx/store';
import { UserState } from './user.state';

export const setCredential = createAction(
  '[Screen1] Set Credential',
  props<UserState>()
);
