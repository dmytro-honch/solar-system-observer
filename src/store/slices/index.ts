import { combineReducers } from '@reduxjs/toolkit';

import planetObserver from './planetObserver';
import menuButton from './menuButton';

const rootReducer = combineReducers({
  planetObserver,
  menuButton,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export default rootReducer;
