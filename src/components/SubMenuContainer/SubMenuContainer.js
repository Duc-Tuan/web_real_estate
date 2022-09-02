import classNames from 'classnames/bind';
import style from './SubMenuContainer.module.scss';

const ctx = classNames.bind(style);

function SubMenuContainer({ name, icon }) {
  return (
    <div className={ctx('wapper')}>
      <h3>{name}</h3>
      <div className={ctx('viewAll')}>
        <p>View All</p>
        <span>{icon}</span>
      </div>
    </div>
  );
}

export default SubMenuContainer;
