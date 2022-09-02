import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faChartSimple,
  faFile,
  faGauge,
  faHeart,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import style from './Home.module.scss';

import Menu from '~/components/menu';
import Banner from '~/components/Banner';
import SubMenuContainer from '~/components/SubMenuContainer';
import MenuCart from '~/components/MenuCart';
import { MenuItems, Items } from '~/assets/Data';

import delivery from '~/assets/Images/delivery.png';
// import burger3 from '~/assets/Images/burger3.png';
import ItemCard from '~/components/ItemCard';
import DebitCard from '~/components/DebitCard';
import CartItem from '~/components/CartItem';

const ctx = classNames.bind(style);

function Home() {
  const [isMainData, setIsMainData] = useState(Items.filter((element) => element.itemId === 'buger01'));

  useEffect(() => {
    {
      const menuLi = document.querySelectorAll('#menu li');

      function setMenuAcitve() {
        menuLi.forEach((n) => n.classList.remove('active'));
        this.classList.add('active');
      }

      menuLi.forEach((n) => n.addEventListener('click', setMenuAcitve));
    }

    {
      const menuCards = document.querySelector('#rowContainer').querySelectorAll('#rowMenuCard');

      function setMenuCardAcitve() {
        menuCards.forEach((n) => n.classList.remove('active'));
        this.classList.add('active');
      }

      menuCards.forEach((n) => n.addEventListener('click', setMenuCardAcitve));
    }
  }, []);

  const setData = (itemId) => {
    setIsMainData(Items.filter((element) => element.itemId === itemId));
  };

  useEffect(() => {}, []);

  return (
    <main className={ctx('wapper')}>
      <div className={ctx('home')}>
        {/* mainContainer */}
        <div className={ctx('mainContainer')}>
          {/* BANNER */}
          <div className={ctx('banner')}>
            <Banner name={'Vetri'} discount={'20'} link={'#'} />
            <img src={delivery} alt="" className={ctx('img')} />
          </div>

          {/* DISHCONTAINER */}
          <div className={ctx('dishcontainer')}>
            {/* SubMenuContainer */}
            <div className={ctx('menuCart')}>
              <SubMenuContainer name={'Menu Category'} icon={<FontAwesomeIcon icon={faAngleRight} />} />
            </div>

            {/* MenuCart */}
            <div className={ctx('rowContainer')} id="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCart
                      img={data.imgSrc}
                      name={data.name}
                      icon={<FontAwesomeIcon icon={faAngleRight} />}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>

            {/* dishItemContainer */}
            <div className={ctx('dishItemContainer')} id="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    img={data.imgSrc}
                    name={data.name}
                    rating={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* rightMenu */}
        <div className={ctx('rightMenu')}>
          <div className={ctx('debitCardContainer')}>
            <div className={ctx('debitCard')}>
              <DebitCard />
            </div>
          </div>

          <div className={ctx('cartCheckOutContainer')}>
            <div className={ctx('cartContainer')}>
              <SubMenuContainer name={'Carts Items'} icon={<FontAwesomeIcon icon={faAngleRight} />} />

              <div className={ctx('cartItems')}>
                  <CartItem name={""} img={""} qty={"4"} price={'7.95'}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={ctx('bottomMenu')}>
        <ul className={ctx('menu')} id="menu">
          <Menu link={'#'} icon={<FontAwesomeIcon icon={faHome} />} isHome />
          <Menu link={'#'} icon={<FontAwesomeIcon icon={faChartSimple} />} />
          <Menu link={'#'} icon={<FontAwesomeIcon icon={faUser} />} />
          <Menu link={'#'} icon={<FontAwesomeIcon icon={faHeart} />} />
          <Menu link={'#'} icon={<FontAwesomeIcon icon={faFile} />} />
          <Menu link={'#'} icon={<FontAwesomeIcon icon={faGauge} />} />

          <div className={ctx('indicators')}></div>
        </ul>
      </div>
    </main>
  );
}

export default Home;
