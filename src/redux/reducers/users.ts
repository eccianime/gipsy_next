/* eslint-disable default-param-last */
import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
// import { APP_ACTIONS } from '../../actions/types';
import { IUsersState } from '../types';

const usersState: IUsersState = {
  currentUser: null
};

const usersReducer: Reducer<IUsersState, ActionType<any>> = (
  state = usersState,
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
