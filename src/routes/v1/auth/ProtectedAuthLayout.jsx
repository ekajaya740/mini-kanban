import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function ProtectedAuthLayout() {
  const token = Cookies.get(import.meta.env.VITE_COOKIE_TOKEN_KEY);

  if (!token) {
    return <Outlet />;
  }

  return <Navigate to='/' />;
}
