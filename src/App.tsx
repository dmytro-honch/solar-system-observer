import { store } from 'src/store';
import { Provider as StoreProvider } from 'react-redux';

import Router from 'src/features/Router';

import './App.css';

function App() {
  return (
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  );
}

export default App;
