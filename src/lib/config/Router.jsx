import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../routes/RootLayout';
import MainPage from '../../routes/v1/MainPage';
import SignUpPage from '../../routes/v1/sign-up/SignUpPage';
import SignInPage from '../../routes/v1/sign-in/SignInPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
      ],
    },
    {
      path: '/sign-up',
      element: <SignUpPage />,
    },
    {
      path: '/sign-in',
      element: <SignInPage />,
    },
  ],
  { basename: '/v1' }
);
