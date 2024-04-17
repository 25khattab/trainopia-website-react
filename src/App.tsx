import { Outlet } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import { useAppSelector } from './hooks/reduxHooks';
import { useEffect } from 'react';
import i18n from './i18n';
import Footer from './components/Shared/Footer';
import { useTheme } from './state/context/theme-provider';

const App = () => {
  const language = useAppSelector((state) => state.language.arabic);
  const { theme } = useTheme();
  useEffect(() => {
    language ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
  }, []);
  return (
    <div
      dir={language ? 'rtl' : 'ltr'}
      className={`relative ${language ? 'font-mikhakLight' : 'font-comoLight'} bg-50%  ${theme == 'light' ? 'bg-light-pattern' : 'bg-dark-pattern'}`}
    >
      <Navbar />
      <Outlet />
      {/* <WhatsApp /> */}
      <Footer />
      <style>
        {`
          h1, h2 {
            font-family: ${language ? 'mikhakBold' : 'comoBold'};
          }
        `}
      </style>
    </div>
  );
};

export default App;
