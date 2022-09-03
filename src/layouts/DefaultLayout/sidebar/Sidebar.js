import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartSimple,
  faFile,
  faGauge,
  faHeart,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/menu/Menu';

const ctx = classNames.bind(style);

function Sidebar() {
  return (
    <div className={ctx('bottomMenu')}>
      <ul className={ctx('menu')} id="menu">
        <Menu link={'/'} icon={<FontAwesomeIcon icon={faHome} />} isHome />
        <Menu link={'#'} icon={<FontAwesomeIcon icon={faChartSimple} />} />
        <Menu link={'/profile'} icon={<FontAwesomeIcon icon={faUser} />} />
        <Menu link={'/hobbies'} icon={<FontAwesomeIcon icon={faHeart} />} />
        <Menu link={'#'} icon={<FontAwesomeIcon icon={faFile} />} />
        <Menu link={'#'} icon={<FontAwesomeIcon icon={faGauge} />} />
        <div className={ctx('indicators')}></div>
      </ul>
    </div>
  );
}

export default Sidebar;
