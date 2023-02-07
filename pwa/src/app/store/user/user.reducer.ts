import { createReducer, on } from '@ngrx/store';
import { setCredential } from './user.actions';
import { UserState } from './user.state';

export const initialState: UserState = {
  email: '',
  password: '',
};

export const userReducer = createReducer(
  initialState,
  on(setCredential, (state, { email, password }) => ({
    ...state,
    email,
    password,
  }))
);
