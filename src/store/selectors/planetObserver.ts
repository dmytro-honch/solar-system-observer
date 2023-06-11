import { RootStateType } from 'src/store/slices';

export const isLoading = ({ planetObserver }: RootStateType) => planetObserver.isLoading;
export const isFullscreen = ({ planetObserver }: RootStateType) => planetObserver.isFullscreen;
export const isShowTools = ({ planetObserver }: RootStateType) => planetObserver.isShowTools;
