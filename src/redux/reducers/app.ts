/* eslint-disable default-param-last */
import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { APP_ACTIONS } from '../actions/types';
import { IAppState } from '../types';

const appState: IAppState = {
  isLoading: false,
  locale: 'pt-BR',
};

const appReducer: Reducer<IAppState, ActionType<any>> = (
  state = appState,
  action,
) => {
  switch (action.type) {
    case APP_ACTIONS.REHYDRATE:
      if( action?.payload?.app ){
        return { ...state, ...action.payload.app };
      }
      return state
    case APP_ACTIONS.TOGGLE_LOADER:
      return { ...state, isLoading: action.payload.isLoading };
    case APP_ACTIONS.SET_LOCALE:
      return { ...state, locale: action.payload.locale };
    default:
      return state;
  }
};

export default appReducer;
