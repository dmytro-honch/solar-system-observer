import { combineReducers } from '@reduxjs/toolkit';

import planetObserver from './planetObserver';
import switchTheme from './switchTheme';

export { planetObserverSlice } from './planetObserver';
export { switchThemeSlice } from './switchTheme';

const rootReducer = combineReducers({
  planetObserver,
  switchTheme,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export default rootReducer;
