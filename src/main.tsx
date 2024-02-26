import './index.css';
import './i18n';
import { ThemeProvider } from './state/context/theme-provider.tsx';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BigSpinner from './components/Shared/BigSpinner.tsx';
import router from './router.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} fallbackElement={<BigSpinner />} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
