import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

const publicRouters = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

const privateRouters = [];

export { publicRouters, privateRouters };
