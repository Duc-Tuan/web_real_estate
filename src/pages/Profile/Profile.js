import classNames from 'classnames/bind';
import style from './Profile.module.scss';

const ctx = classNames.bind(style);

function Profile() {
  return <div className={ctx('Profile')}>Profile</div>;
}

export default Profile;
