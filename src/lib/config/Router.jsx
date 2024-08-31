import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../routes/RootLayout';
import MainPage from '../../routes/v1/MainPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainPage />
        }
      ]
    },
  ],
  { basename: '/v1' }
);
