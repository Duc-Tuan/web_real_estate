import { faCartShopping, faChartSimple, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Header.module.scss';

import logo from '~/assets/Images/logo.png';
import avat from '~/assets/Images/profile.jpg';
import { Link } from 'react-router-dom';

const ctx = classNames.bind(style);

function Header() {
  const handleClick = () => {
    document.querySelector('#rightMenu').classList.toggle('active');
  };

  return (
    <header className={ctx('header')}>
      <Link to="/" >
        <img src={logo} alt="" className={ctx('logo')} />
      </Link>

      <div className={ctx('inputBox')}>
        <FontAwesomeIcon icon={faSearch} className={ctx('searchIcon')} />
        <input type="text" placeholder="Search ..." />
      </div>

      <div className={ctx('shoppingCart')}>
        <FontAwesomeIcon icon={faCartShopping} className={ctx('iconCart')} />
        <div className={ctx('cart_conrtent')}>
          <p>2</p>
        </div>
      </div>

      <div className={ctx('profileContainer')}>
        <div className={ctx('imgBox')}>
          <img src={avat} alt="" className={ctx('profilePic')} />
        </div>

        <h2 className={ctx('userName')}>Vetrivel Ravi</h2>
      </div>

      <div className={ctx('toggleMenu')} id="toggleMenu" onClick={handleClick}>
        <FontAwesomeIcon icon={faChartSimple} className={ctx('iconMenu')} />
      </div>
    </header>
  );
}

export default Header;
