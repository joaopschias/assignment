const navigationConfig = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/users',
    label: 'Users',
    children: [
      {
        path: '/',
        label: 'User List',
      },
      {
        path: '/create',
        label: 'Create User',
      },
    ],
  },
];

export default navigationConfig;
