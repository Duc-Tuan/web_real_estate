import classNames from 'classnames/bind';
import style from './Footer.module.scss';

const ctx = classNames.bind(style);

function Footer() {
  return <div className={ctx('Footer')}>Footer</div>;
}

export default Footer;
