import classNames from 'classnames/bind';
import style from './CartItem.module.scss';

const ctx = classNames.bind(style);

function CartItem({ name, img, qty, price }) {
  return (
    <div className={ctx('CartItem')}>
      <div className={ctx('imgBox')}>
        <img src={img} alt="" />
      </div>

      <div className={ctx('itemSection')}>
        <h2><div className={ctx('itemName')}>{name}</div></h2>
        <div className={ctx('itemQuantity')}>
            <span>x {qty}</span>
            <div className={ctx('quantity')}>
                <span className={ctx('remove')}>-</span>
                <span className={ctx('add')}>+</span>
            </div>
        </div>
      </div>

      <div className={ctx('itemPrice')}>
        <span className={ctx('dolorSign')}>$ </span>
        <span className={ctx('itemPriceValue')}>{price}</span>
      </div>
    </div>
  );
}

export default CartItem;
