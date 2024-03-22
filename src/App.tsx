import { Outlet } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import { useAppSelector } from './hooks/reduxHooks';
import { useEffect } from 'react';
import i18n from './i18n';
import Footer from './components/Shared/Footer';
import WhatsApp from './components/Shared/WhatsApp';

const App = () => {
  const language = useAppSelector((state) => state.language.arabic);
  useEffect(() => {
    language ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
  }, []);
  return (
    <div dir={language ? 'rtl' : 'ltr'} className='relative'>
      <Navbar />
      <WhatsApp />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
