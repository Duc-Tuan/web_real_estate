import { useEffect, useState } from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { useStateValue } from '~/hooks/StateProvider';
import style from './CartItem.module.scss';
import { actionType } from '~/hooks/Reducer';

let cartItems = [];
const ctx = classNames.bind(style);

function CartItem({ name, img, price, itemId }) {
  const [qty, setQty] = useState(1);
  const [{ cart }, dispatch] = useStateValue();
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseInt(price));

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseInt(price));
  }, [qty]);

  const updateQuantity = (action, id) => {
    if (action === 'add') {
      setQty(qty + 1);
    } else {
      if (qty <= 0) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      }
      setQty(qty - 1);
    }
  };

  return (
    <div className={ctx('CartItem')}>
      <div className={ctx('imgBox')}>
        <img src={img} alt="" />
      </div>

      <div className={ctx('itemSection')}>
        <h2>
          <div className={ctx('itemName')}>{name}</div>
        </h2>

        <div className={ctx('itemQuantity')}>
          <span className={ctx('multiply')}>x {qty}</span>
          <div className={ctx('quantity')}>
            <div className={ctx('remove')} onClick={() => updateQuantity('remove', itemId)}>
              <FontAwesomeIcon icon={faMinus} />
            </div>

            <div className={ctx('add')} onClick={() => updateQuantity('add', itemId)}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
      </div>

      <div className={ctx('itemPrice')}>
        <span className={ctx('dolorSign')}>$ </span>
        <span className={ctx('itemPriceValue')}>{itemPrice}</span>
      </div>
    </div>
  );
}

export default CartItem;
