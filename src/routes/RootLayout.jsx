import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import imgUrl from '../assets/logo.svg';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <Layout className='h-dvh'>
      <Layout>
        <Sider width={50} className='px-[10px] py-5'>
          <img src={imgUrl} alt='Logo' />
        </Sider>
        <Layout className='px-[50px] text-xl font-bold py-5 space-y-6'>
          <h1>Product Roadmap</h1>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
}
