import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import messageReducer from './reducer/message';

const store = configureStore({
  reducer: {
    messageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});

export default store;
