import { combineReducers } from '@reduxjs/toolkit';

import planetObserver from './planetObserver';
import switchTheme from './switchTheme';
import menuButton from './menuButton';

const rootReducer = combineReducers({
  planetObserver,
  switchTheme,
  menuButton,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export default rootReducer;
