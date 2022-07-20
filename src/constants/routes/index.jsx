import Home from 'pages/home';
import Search from 'pages/search';
import Signin from 'pages/signin';
import Signup from 'pages/signup';
import Watch from 'pages/watch';
import Channel from 'pages/channel';
import Dashboard from 'pages/dashboard';
import ForgotPassword from 'pages/forgotPassword';
import Reset from 'pages/reset';
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
    protected: true,
    path: '/dashboard/:tab',
    component: Dashboard,
  },

  {
    exact: true,
    protected: false,
    path: '/channel/:tab',
    component: Channel,
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
  {
    exact: true,
    protected: false,
    path: '/forget',
    component: ForgotPassword,
  },
  {
    exact: false,
    protected: false,
    path: '/reset',
    component: Reset,
  },
];
export default appRoutes;
