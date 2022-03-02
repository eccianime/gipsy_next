import { action } from 'typesafe-actions';
import { APP_ACTIONS } from './types';

export const toggleLoader = (isLoading: boolean) => action(APP_ACTIONS.TOGGLE_LOADER, { isLoading });
export const setLocale = (locale: string) => action(APP_ACTIONS.SET_LOCALE, { locale });
