import classNames from 'classnames/bind';
import style from './Header.module.scss';

const ctx = classNames.bind(style);

function Header() {
  return <div className={ctx('heaser')}>Header</div>;
}

export default Header;
