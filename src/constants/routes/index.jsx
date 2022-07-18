import Home from 'pages/home';
import Search from 'pages/search';
import Signin from 'pages/signin';
import Signup from 'pages/signup';
import Watch from 'pages/watch';
const appRoutes = [
  {
    exact: true,
    protected: false,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    protected: false,
    path: '/watch',
    component: Watch,
  },
  {
    exact: true,
    protected: false,
    path: '/search',
    component: Search,
  },
  {
    exact: true,
    protected: false,
    path: '/signin',
    component: Signin,
  },
  {
    exact: true,
    protected: false,
    path: '/signup',
    component: Signup,
  },
];
export default appRoutes;
