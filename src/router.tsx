import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Images from './pages/Images';
import ContactUs from './pages/ContactUs';
import Activities from './pages/Activities';
import AboutUs from './pages/AboutUs';
import Event from './pages/Event';
import Service from './pages/Service';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { element: <Home />, index: true, errorElement: <NotFound /> },
      { path: '/aboutus', element: <AboutUs />, errorElement: <NotFound /> },
      { path: '/activities', element: <Activities />, errorElement: <NotFound /> },
      { path: '/contactus', element: <ContactUs />, errorElement: <NotFound /> },
      { path: '/images', element: <Images />, errorElement: <NotFound /> },
      { path: '/events/:title', element: <Event />, errorElement: <NotFound /> },
      { path: '/services/:title', element: <Service />, errorElement: <NotFound /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
