import Columns from 'pages/columns';
import HomePage from 'pages/home';
import Record from 'pages/record';

export default [
  {
    path: '/',
    component: <HomePage />,
    public: false,
  },
  {
    path: '/record',
    component: <Record />,
    public: false,
  },
  {
    path: '/columns',
    component: <Columns />,
    public: false,
  },
];
