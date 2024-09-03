import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/config/reactQuery.js';
import { RouterProvider } from 'react-router-dom';
import { router } from './lib/config/Router.jsx';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position='top-center' richColors />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
