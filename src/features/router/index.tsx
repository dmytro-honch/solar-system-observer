import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ObserverPage from 'src/features/observerPage';
import Page404 from 'src/features/page404';
import ContactUsPage from 'src/features/contactUsPage';
import AboutProjectPage from 'src/features/aboutProjectPage';

import { MenuButton } from 'src/components/menuButton/menuButton.tsx';
import { SwitchTheme } from 'src/components/switchTheme/switchTheme.tsx';

import './index.css';

import { ABOUT_US_PATH, CONTACT_US_PATH, FALLBACK_404_ROUTE, PLANET_OBSERVER_PATH } from './path';

const Router = () => (
  <BrowserRouter>
    <MenuButton />
    <SwitchTheme />
    <Routes>
      <Route path={PLANET_OBSERVER_PATH} element={<ObserverPage />} />
      <Route path={ABOUT_US_PATH} element={<AboutProjectPage />} />
      <Route path={FALLBACK_404_ROUTE} element={<Page404 />} />
      <Route path={CONTACT_US_PATH} element={<ContactUsPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
