import SplashImage from '../resources/img/seo/home-splash-screen.png';

export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/splash'),
    seo: {
      title: 'seessee.space',
      description: 'seessee.space is a platform, gallery, and shop for local artists.',
      image: SplashImage,
    },
  },
];
