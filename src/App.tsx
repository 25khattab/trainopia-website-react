import { Outlet } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import { useAppSelector } from './hooks/reduxHooks';
import { useEffect } from 'react';
import i18n from './i18n';

const App = () => {
  const language = useAppSelector((state) => state.language.arabic);
  useEffect(() => {
    language ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
  }, []);
  return (
    <div dir={language ? 'rtl' : 'ltr'} className='min'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
