import classNames from 'classnames/bind';
import style from './MenuCart.module.scss';

const ctx = classNames.bind(style);

function MenuCart({ img, name, icon, isActive }) {
  return (
    <div id="rowMenuCard" className={`rowMenuCard ${isActive ? 'active' : ''}`} >
      <div className={ctx('imgBox')} id="imgBox">
        <img src={img} alt="" />
      </div>
      <h3>{name}</h3>
      <span className={ctx('laodMenu')} id="laodMenu">
        {icon}
      </span>
    </div>
  );
}

export default MenuCart;
