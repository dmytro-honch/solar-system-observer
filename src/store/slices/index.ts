import { combineReducers } from '@reduxjs/toolkit';

import planetObserver from './planetObserver';

export { planetObserverSlice } from './planetObserver';

const rootReducer = combineReducers({
  planetObserver,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export default rootReducer;
