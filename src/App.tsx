import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import i18next from 'i18next';
import { theme, translations } from '@config';
import { Alert } from '@components';
import { Dashboard } from '@pages';

const { Provider: AlertProvider, transitions, positions, AlertTemplate } = Alert;

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
};

i18next.init({
  lng: 'en',
  resources: translations,
});

function App() {
  useEffect(() => {
    document.title = 'Reservation Form';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Dashboard />
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
