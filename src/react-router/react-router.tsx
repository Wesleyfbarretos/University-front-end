import { createBrowserRouter } from 'react-router-dom';
import { CreateAccount } from '../pages/create-account/create-account';
import { Home } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create',
    element: <CreateAccount />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);
