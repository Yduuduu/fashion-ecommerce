import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, PERSIST } from 'redux-persist';
import userInfoSlice from './userInfoSlice';

const reducers = combineReducers({
  userInfoFilter: userInfoSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfoFilter'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export default store;
