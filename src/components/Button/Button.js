import classNames from 'classnames/bind';
import style from './Button.module.scss';

const ctx = classNames.bind(style);

function Button({ leftIcon = false, rightIcon = false, onlClick, children, classnames, type }) {
  const cx = ctx('btn', {
    type,
    classnames,
  });

  return (
    <button className={cx}>
      {leftIcon && <span className={ctx('icon')}>{leftIcon}</span>}
      <span className={ctx(' ')}>{children}</span>
      {rightIcon && <span className={ctx('icon')}>{rightIcon}</span>}
    </button>
  );
}

export default Button;
