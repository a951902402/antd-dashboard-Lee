export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      title: {
        defaultTitle: 'Dashboard',
        //format: '{current}{separator}{parent}',
        separator: ' | '
      }
    }],
  ],
  /*
  routes: [{
    path: '/',
    title: 'Dashboard',
    component: '../layouts',
    routes: [
      {
        path: '/card',
        component: 'Card'
      },
      {
        path: '/',
        component: 'HelloWorld'
      },
      {
        path: '/HelloWorld',
        title: 'HelloWorld',
        component: 'HelloWorld'
      },
      {
        path: '/puzzlecards',
        title: 'Puzzlecards',
        component: 'puzzlecards'
      },
      {
        path: '/test',
        component: 'test'
      },
      {
        path: '/i18n',
        component: 'i18n.example'
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        ]
      },
    ]
  }],
  */
};