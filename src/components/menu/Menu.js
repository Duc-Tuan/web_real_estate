import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const ctx = classNames.bind(style);

function Menu({ link, icon, isHome }) {
    return ( 
        <li className={isHome && 'active'}>
            <a href={link}>
                <span className={ctx('icon')}>{icon}</span>
            </a>
        </li>
    );
}

export default Menu;