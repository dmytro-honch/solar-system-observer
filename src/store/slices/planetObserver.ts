import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PlanetObserverStateType = {
  isFullscreen: boolean;
  isLoading: boolean;
  isShowTools: boolean;
};

const initialState: PlanetObserverStateType = {
  isFullscreen: false,
  isLoading: false,
  isShowTools: true,
};

export const planetObserverSlice = createSlice({
  name: 'planetObserver',
  initialState,
  reducers: {
    setIsFullscreen: (state, action: PayloadAction<boolean>) => {
      state.isFullscreen = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsShowTools: (state, action: PayloadAction<boolean>) => {
      state.isShowTools = action.payload;
    },
  },
});

export default planetObserverSlice.reducer;
