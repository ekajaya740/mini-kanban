import { ConfigProvider } from 'antd';
import PropTypes from 'prop-types';

AntdConfig.propTypes = {
  children: PropTypes.object,
};

export default function AntdConfig({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 0,
          colorPrimaryHover: '#F5F0FC',
          colorPrimaryTextHover: '#5E20B3',
          colorSuccess: '#27AE60',
          colorTextDisabled: '#8C8C8C',
          colorError: '#EB5757',
          colorWarning: '#FAAD14',
          colorBgBase: '#1890FF',
        },
      }}>
      {children}
    </ConfigProvider>
  );
}
