import Home from 'pages/home';
import Signin from 'pages/signin';
import Signup from 'pages/signup';
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
