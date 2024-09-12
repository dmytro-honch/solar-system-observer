import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="p-5 md:p-10">
      <App />
    </div>
  </React.StrictMode>,
);
