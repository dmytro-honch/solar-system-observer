import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ObserverPage from 'src/features/ObserverPage';
import MenuPage from 'src/features/MenuPage';
import Page404 from 'src/features/404';
import ContactUsPage from 'src/features/ContactUsPage';
import AboutProjectPage from 'src/features/AboutProjectPage';
import SolarSystemObjectsPage from 'src/features/SolarSystemObjectsPage';

import {
  MENU_PATH,
  PLANET_OBSERVER_PATH,
  FALLBACK_404_ROUTE,
  CONTACT_US_PATH,
  ABOUT_US_PATH,
  SOLAR_SYSTEM_PATH,
} from './path';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PLANET_OBSERVER_PATH} element={<ObserverPage />} />
        <Route path={MENU_PATH} element={<MenuPage />} />
        <Route path={ABOUT_US_PATH} element={<AboutProjectPage />} />
        <Route path={FALLBACK_404_ROUTE} element={<Page404 />} />
        <Route path={CONTACT_US_PATH} element={<ContactUsPage />} />
        <Route path={SOLAR_SYSTEM_PATH} element={<SolarSystemObjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
