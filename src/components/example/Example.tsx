import { Link } from 'react-router-dom';

import { useExample } from './hook';
import { MENU_PATH } from 'src/features/Router/path';

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
        <h1 className="heading">Hello, {exampleProp}</h1>
        <div>isLoading: {isLoading ? 'true' : 'false'}</div>
        <div>isShowTools: {isShowTools ? 'true' : 'false'}</div>
        <div>isFullScreen: {isFullscreen ? 'true' : 'false'}</div>
        <hr />
        <div className="option-wrapper">
          <button onClick={handleChangeLoadingState}>Change loading</button>
          <button onClick={handleChangeShowToolsState}>Change showing tools</button>
          <button onClick={handleChangeFullscreenState}>Change fullscreen</button>
        </div>
        <div className="option-wrapper">
          <Link to={MENU_PATH}>Menu</Link>
        </div>
      </div>
    </>
  );
};

Example.defaultProps = {
  exampleProp: 'Oleksii',
};
