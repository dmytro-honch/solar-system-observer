import { RootStateType } from 'src/store/slices';

export const selectMenu = ({ menuButton }: RootStateType) => menuButton.showMenu;
