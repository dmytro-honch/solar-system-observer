import { RootStateType } from 'src/store/slices';

export const selectTheme = ({ switchTheme }: RootStateType) => switchTheme.theme;
