import { combineReducers } from '@reduxjs/toolkit';

import planetObserver from './planetObserver.ts';

export { planetObserverSlice } from './planetObserver.ts';

const rootReducer = combineReducers({
  planetObserver,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export default rootReducer;
