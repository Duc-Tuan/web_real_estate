import classNames from 'classnames/bind';
import style from './Defaultlayout.module.scss';

import { Header, Footer } from '~/layouts/Components';
import Sidebar from '~/layouts/DefaultLayout/sidebar';

const ctx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={ctx('wapper')}>
      <Header />
      <div className={ctx('container')}>
        <Sidebar />
        <div className={ctx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
