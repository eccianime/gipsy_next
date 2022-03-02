import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app', 'user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: [thunkMiddleware],
  })
}

export const store = makeStore();

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>
