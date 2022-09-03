import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const ctx = classNames.bind(style);

function Menu({ link, icon, isHome }) {
    return ( 
        <li className={isHome && 'active'}>
            <Link to={link}>
                <span className={ctx('icon')}>{icon}</span>
            </Link>
        </li>
    );
}

export default Menu;