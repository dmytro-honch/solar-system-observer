import { shallowEqual, useSelector } from 'react-redux';

import useAppDispatch from 'src/hook/useAppDispatch';
import { planetObserverSelectors } from 'src/store';
import { planetObserverSlice } from 'src/store';

// this how to use JSdoc
/**
 * Hook returns all necessary data for example component
 * @returns {Object} - object with all necessary data for example component
 */
export const useExample = () => {
  const isLoading = useSelector(planetObserverSelectors.isLoading, shallowEqual);
  const isFullscreen = useSelector(planetObserverSelectors.isFullscreen, shallowEqual);
  const isShowTools = useSelector(planetObserverSelectors.isShowTools, shallowEqual);
  const dispatch = useAppDispatch();

  const handleChangeLoadingState = () => {
    dispatch(planetObserverSlice.actions.setIsLoading(!isLoading));
  };

  const handleChangeShowToolsState = () => {
    dispatch(planetObserverSlice.actions.setIsShowTools(!isShowTools));
  };

  const handleChangeFullscreenState = () => {
    dispatch(planetObserverSlice.actions.setIsFullscreen(!isFullscreen));
  };

  return {
    isLoading,
    isShowTools,
    isFullscreen,
    handleChangeLoadingState,
    handleChangeShowToolsState,
    handleChangeFullscreenState,
  };
};
