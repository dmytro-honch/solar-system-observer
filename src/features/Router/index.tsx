import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ObserverPage from 'src/features/ObserverPage';
import MenuPage from 'src/features/Menu';
import Page404 from 'src/features/404';

import { MENU_PATH, PLANET_OBSERVER_PATH } from './pathes.ts';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PLANET_OBSERVER_PATH} element={<ObserverPage />} />
        <Route path={MENU_PATH} element={<MenuPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
