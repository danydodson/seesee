import ShareImg72 from './resources/img/icon-72x72.png'
import ShareImg96 from './resources/img/icon-96x96.png'
import ShareImg128 from './resources/img/icon-128x128.png'
import ShareImg144 from './resources/img/icon-144x144.png'
import ShareImg152 from './resources/img/icon-152x152.png'
import ShareImg192 from './resources/img/icon-192x192.png'
import ShareImg384 from './resources/img/icon-384x384.png'
import ShareImg512 from './resources/img/icon-512x512.png'

export default {
  name: 'SeeSee',
  short_name: 'seesee',
  dir: 'ltr',
  orientation: 'any',
  lang: 'en-US',
  start_url: '/',
  theme_color: '#fff',
  background_color: '#fff',
  display: 'standalone',
  description: 'SeeSee Web App',
  icons: [
    { src: ShareImg72, sizes: '72x72', },
    { src: ShareImg96, sizes: '96x96', },
    { src: ShareImg128, sizes: '128x128', },
    { src: ShareImg144, sizes: '144x144', },
    { src: ShareImg152, sizes: '152x152', },
    { src: ShareImg192, sizes: '192x192', },
    { src: ShareImg384, sizes: '384x384', },
    { src: ShareImg512, sizes: '512x512', },
  ],
};
