import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/config/reactQuery.js';
import { RouterProvider } from 'react-router-dom';
import { router } from './lib/config/router.jsx';
import AntdConfig from './lib/config/antd.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AntdConfig>
        <RouterProvider router={router} />
      </AntdConfig>
    </QueryClientProvider>
  </StrictMode>
);
