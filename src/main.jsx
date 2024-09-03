import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/config/reactQuery.js';
import { RouterProvider } from 'react-router-dom';
import { router } from './lib/config/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
