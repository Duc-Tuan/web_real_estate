import classNames from 'classnames/bind';
import style from './HeaderOnly.module.scss';

import { Header } from '~/layouts/Components';
import Sidebar from '~/layouts/DefaultLayout/sidebar';

const ctx = classNames.bind(style);

function HeaderOnly({ children }) {
  return (
    <div className={ctx('wapper')}>
      <Header />
      <div className={ctx('container')}>
        <Sidebar />
        <div className={ctx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
