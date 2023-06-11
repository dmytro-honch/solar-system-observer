import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import rootReducer from './slices';

const middleware = [thunk];

export default function configure() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  });
}

export type AppDispatch = ReturnType<typeof configure>['dispatch'];
