import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import style from './Home.module.scss';

import Banner from '~/components/Banner';
import SubMenuContainer from '~/components/SubMenuContainer';
import MenuCart from '~/components/MenuCart';
import { MenuItems, Items } from '~/assets/Data';

import delivery from '~/assets/Images/delivery.png';
import ItemCard from '~/components/ItemCard';
import DebitCard from '~/components/DebitCard';
import CartItem from '~/components/CartItem';
import { useStateValue } from '~/hooks/StateProvider';

const ctx = classNames.bind(style);

function Home() {
  const [isMainData, setIsMainData] = useState(Items.filter((element) => element.itemId === 'buger01'));
  const [{ cart }, dispatch] = useStateValue();

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
  }, [isMainData]);

  const setData = (itemId) => {
    setIsMainData(Items.filter((element) => element.itemId === itemId));
  };

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
        <div id="rightMenu" className={ctx('rightMenu')}>
          <div className={ctx('debitCardContainer')}>
            <div className={ctx('debitCard')}>
              <DebitCard />
            </div>
          </div>

          {!cart ? (
            <div className={ctx('addSomeItem')}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className={ctx('cartCheckOutContainer')}>
              <SubMenuContainer name={'Carts Items'} icon={<FontAwesomeIcon icon={faAngleRight} />} />
              <div className={ctx('cartContainer')}>
                <div className={ctx('cartItems')}>
                  {cart &&
                    cart.map((data) => (
                      <CartItem key={data.id} itemId={data.id} name={data.name} img={data.imgSrc} price={data.price} />
                    ))}
                </div>
              </div>

              <div className={ctx('totalSections')}>
                <h3>Total</h3>
                <p>
                  <span>$ </span>45.0
                </p>
              </div>

              <button className={ctx('checkOut')}>Check Out</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
