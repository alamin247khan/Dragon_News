import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/news',
    element: <div>News Page</div>,
  },
  {
    path: '/auth',
    element: <div>Auth cdPage</div>,
  },
  {
    path: '*',
    element: <div>404 - Page Not Found</div>,
  },
])

export default router;
