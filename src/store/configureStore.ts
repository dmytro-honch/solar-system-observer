import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './slices';

export default function configure() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type AppDispatch = ReturnType<typeof configure>['dispatch'];
