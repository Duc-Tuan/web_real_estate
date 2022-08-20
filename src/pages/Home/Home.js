import classNames from 'classnames/bind';
import style from './Home.module.scss';

const ctx = classNames.bind(style);

function Home() {
  return <div className={ctx('Home')}>Home</div>;
}

export default Home;
