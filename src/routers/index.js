import { DefaultLayout, HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Hobbies from '~/pages/History_of_hobbies';

const publicRouters = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile, layout: DefaultLayout },
  { path: '/hobbies', component: Hobbies, layout: DefaultLayout },
  { path: '/@:name', component: Search, layout: HeaderOnly },
];

const privateRouters = [];

export { publicRouters, privateRouters };
