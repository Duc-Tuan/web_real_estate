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
        {children}
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
