import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Images from './pages/Images';
import ContactUs from './pages/ContactUs';
import Activity from './pages/Activity';
import AboutUs from './pages/AboutUs';
import Event from './pages/Event';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { element: <Home />, index: true, errorElement: <NotFound /> },
      { path: '/aboutus', element: <AboutUs />, errorElement: <NotFound /> },
      { path: '/contactus', element: <ContactUs />, errorElement: <NotFound /> },
      { path: '/images', element: <Images />, errorElement: <NotFound /> },
      { path: '/events/:title', element: <Event />, errorElement: <NotFound /> },
      { path: '/activity/:title', element: <Activity />, errorElement: <NotFound /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
