import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

const ctx = classNames.bind(styles);

function Banner({ name, discount, link }) {
  return (
    <div className={ctx('wapper')}>
      <h3>hello {name}</h3>
      <p>
        Get free discount for every <span>$ {discount}</span> purchage
      </p>

      <a href={link}>Learn more</a>
    </div>
  );
}

export default Banner;
