import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import style from './ItemCard.module.scss';
import { Items } from '~/assets/Data';
import { useStateValue } from '~/hooks/StateProvider';
import { actionType } from '~/hooks/Reducer';
let cartData = [];

const ctx = classNames.bind(style);

function ItemCard({ img, name, rating, price, itemId }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(rating));

  const [isCard, setIsCard] = useState(null);
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => { 
    if(isCard) {
      cartData.push(isCard);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      })
    }
  },[isCard]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className={ctx('ItemCard')} id={itemId}>
      <div className={`isfavourite ${isFavourite ? 'active' : ''}`} onClick={() => setIsFavourite(!isFavourite)}>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className={ctx('imgBox')}>
        <img src={img} alt={name} />
      </div>
      <div className={ctx('imgContent')}>
        <h3 className={ctx('name')}>{name}</h3>
        <div className={ctx('bottom')}>
          <div className={ctx('ratings')}>
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? 'orange' : 'gray'}`}
                onClick={() => handleClick(i + 1)}
              >
                <FontAwesomeIcon icon={faStar} />
              </i>
            ))}
            <h3 className={ctx('price')}>
              <span>$ </span>
              {price}
            </h3>
          </div>
          <span className={ctx('addtoCard')} onClick={() => setIsCard(Items.find(n => n.id === itemId))} >
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
