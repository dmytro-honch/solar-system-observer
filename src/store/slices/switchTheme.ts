import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SwitchThemeStateType } from 'src/types';

const initialState: SwitchThemeStateType = {
  theme: localStorage.getItem('theme') || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
};

export const switchThemeSlice = createSlice({
  name: 'switchTheme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { toggleTheme } = switchThemeSlice.actions;
export default switchThemeSlice.reducer;
