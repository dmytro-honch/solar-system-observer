import { createSlice } from '@reduxjs/toolkit';
import { MenuButtonStateType } from 'src/types';

const initialState: MenuButtonStateType = {
  showMenu: false,
};

export const menuButtonSlice = createSlice({
  name: 'menuButton',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
    closeMenu: (state) => {
      state.showMenu = false;
    },
  },
});

export const { openMenu, closeMenu } = menuButtonSlice.actions;
export default menuButtonSlice.reducer;
