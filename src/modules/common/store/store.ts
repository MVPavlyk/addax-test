import { configureStore } from '@reduxjs/toolkit';

import launchesReducers from './slices/launches.slice';

const store = configureStore({
  reducer: {
    launchesReducers
  }
})

export default store;

export type AppDispatch = typeof store.dispatch
