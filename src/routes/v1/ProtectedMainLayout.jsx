import { Navigate, Outlet } from 'react-router-dom';
import SideNavigation from '../../components/navigations/SideNavigation';

import Cookies from 'js-cookie';

export default function ProtectedMainLayout() {
  const token = Cookies.get(import.meta.env.VITE_COOKIE_TOKEN_KEY);

  if (!token) {
    return <Navigate to='/auth/sign-in' />;
  }

  return (
    <section className='flex overflow-x-hidden w-full overflow-y-hidden max-h-dvh'>
      <SideNavigation />
      <Outlet />
    </section>
  );
}
