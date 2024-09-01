import { Outlet } from 'react-router-dom';
import SideNavigation from '../components/navigations/SideNavigation';

export default function RootLayout() {
  return (
    <section className='flex'>
      <SideNavigation />
      <Outlet />
    </section>
  );
}
