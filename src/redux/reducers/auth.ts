/* eslint-disable default-param-last */
import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
// import { APP_ACTIONS } from '../../actions/types';
import { IAuthState } from '../types';

const authState: IAuthState = {
  token: '',
};

const authReducer: Reducer<IAuthState, ActionType<any>> = (
  state = authState,
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
