import * as redux from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'typesafe-actions';

import app from './app';
import auth from './auth';
import users from './users';

export const rootReducer = redux.combineReducers({
  app,
  auth,
  users,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunkDispatch = ThunkDispatch<RootState, void, Action>;
