import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ObserverPage from 'src/features/observerPage';
import MenuPage from 'src/features/menuPage';
import Page404 from 'src/features/page404';
import ContactUsPage from 'src/features/contactUsPage';
import AboutProjectPage from 'src/features/aboutProjectPage';

import { MENU_PATH, PLANET_OBSERVER_PATH, FALLBACK_404_ROUTE, CONTACT_US_PATH, ABOUT_US_PATH } from './path';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PLANET_OBSERVER_PATH} element={<ObserverPage />} />
      <Route path={MENU_PATH} element={<MenuPage />} />
      <Route path={ABOUT_US_PATH} element={<AboutProjectPage />} />
      <Route path={FALLBACK_404_ROUTE} element={<Page404 />} />
      <Route path={CONTACT_US_PATH} element={<ContactUsPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
