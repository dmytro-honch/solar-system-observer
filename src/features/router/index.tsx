import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HistoryPage from 'src/features/historyPage';
import Page404 from 'src/features/page404';
import ContactUsPage from 'src/features/contactUsPage';
import AboutProjectPage from 'src/features/aboutProjectPage';

import { MenuButton } from 'src/components/menuButton/menuButton';

import { ABOUT_US_PATH, CONTACT_US_PATH, FALLBACK_404_ROUTE, HISTORY_OBSERVER_PATH } from './path';

import './index.css';

const Router = () => (
  <BrowserRouter>
    <div className="container">
      <MenuButton />
      <Routes>
        <Route path={HISTORY_OBSERVER_PATH + ':data?'} element={<HistoryPage />} />
        <Route path={ABOUT_US_PATH} element={<AboutProjectPage />} />
        <Route path={FALLBACK_404_ROUTE} element={<Page404 />} />
        <Route path={CONTACT_US_PATH} element={<ContactUsPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default Router;
