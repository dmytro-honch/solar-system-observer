import { store } from 'src/store';
import { Provider as StoreProvider } from 'react-redux';
import Router from 'src/features/router';
import { ThemeContextProvider } from 'src/components/switchTheme/useThemeContext';

import './app.css';

function App() {
  return (
    <ThemeContextProvider>
      <StoreProvider store={store}>
        <Router />
      </StoreProvider>
    </ThemeContextProvider>
  );
}

export default App;
