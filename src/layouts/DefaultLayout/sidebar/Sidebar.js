import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

const ctx = classNames.bind(style);

function Sidebar() {
  return <div className={ctx('Sidebar')}>Sidebar</div>;
}

export default Sidebar;
