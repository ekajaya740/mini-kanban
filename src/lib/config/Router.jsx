import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../../routes/v1/MainPage';
import SignUpPage from '../../routes/v1/auth/sign-up/SignUpPage';
import SignInPage from '../../routes/v1/auth/sign-in/SignInPage';
import ProtectedMainLayout from '../../routes/v1/ProtectedMainLayout';
import ProtectedAuthLayout from '../../routes/v1/auth/ProtectedAuthLayout';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <ProtectedMainLayout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
      ],
    },
    {
      path: '/auth',
      element: <ProtectedAuthLayout />,
      children: [
        {
          index: true,
          path: 'sign-up',
          element: <SignUpPage />,
        },
        {
          index: true,
          path: 'sign-in',
          element: <SignInPage />,
        },
      ],
    },
  ],
  { basename: '/v1' }
);
