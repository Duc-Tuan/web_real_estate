import classNames from 'classnames/bind';
import style from './Search.module.scss';

const ctx = classNames.bind(style);

function Search() {
  return <div className={ctx('Search')}>Search</div>;
}

export default Search;
