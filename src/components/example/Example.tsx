import { useExample } from './hook';

import './example.css';

type ExamplePropType = {
  exampleProp?: string;
};
export const Example = ({ exampleProp }: ExamplePropType) => {
  const {
    isLoading,
    isShowTools,
    isFullscreen,
    handleChangeLoadingState,
    handleChangeShowToolsState,
    handleChangeFullscreenState,
  } = useExample();

  return (
    <>
      <div className="wrapper">
        <h1 className="heading">Change my code, {exampleProp}</h1>
        <div>isLoading: {isLoading ? 'true' : 'false'}</div>
        <div>isShowTools: {isShowTools ? 'true' : 'false'}</div>
        <div>isFullScreen: {isFullscreen ? 'true' : 'false'}</div>
        <hr />
        <div className="option-wrapper">
          <button type="button" onClick={handleChangeLoadingState}>Change loading</button>
          <button type="button" onClick={handleChangeShowToolsState}>Change showing tools</button>
          <button type="button" onClick={handleChangeFullscreenState}>Change fullscreen</button>
        </div>
      </div>
    </>
  );
};

Example.defaultProps = {
  exampleProp: 'Dimon',
};
