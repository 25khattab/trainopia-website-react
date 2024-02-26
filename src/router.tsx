import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Images from './pages/Images';
import UpComingEvents from './pages/UpComingEvents';
import ContactUs from './pages/ContactUs';
import Activities from './pages/Activities';
import AboutUs from './pages/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { element: <Home />, index: true, errorElement: <NotFound /> },
      { path: '/aboutus', element: <AboutUs />, errorElement: <NotFound /> },
      { path: '/activities', element: <Activities />, errorElement: <NotFound /> },
      { path: '/contactus', element: <ContactUs />, errorElement: <NotFound /> },
      { path: '/upcomingevents', element: <UpComingEvents />, errorElement: <NotFound /> },
      { path: '/images', element: <Images />, errorElement: <NotFound /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
