import React from 'react';
import ReactPWAIcon from './resources/img/react-pwa.png';
import ReactPWAAppleIconx57 from './resources/img/apple-icon-57x57.png';
import ReactPWAAppleIconx60 from './resources/img/apple-icon-60x60.png';
import ReactPWAAppleIconx72 from './resources/img/apple-icon-72x72.png';
import ReactPWAAppleIconx76 from './resources/img/apple-icon-76x76.png';
import ReactPWAAppleIconx114 from './resources/img/apple-icon-114x114.png';
import ReactPWAAppleIconx120 from './resources/img/apple-icon-120x120.png';
import ReactPWAAppleIconx144 from './resources/img/apple-icon-144x144.png';
import ReactPWAAppleIconx152 from './resources/img/apple-icon-152x152.png';
import ReactPWAAppleIconx180 from './resources/img/apple-icon-180x180.png';
import ReactPWAAndroidIconx192 from './resources/img/android-icon-192x192.png';
import ReactPWAFaviconx512 from './resources/img/favicon-512x512.png';
import ReactPWAFaviconx192 from './resources/img/favicon-192x192.png';
import ReactPWAFaviconx32 from './resources/img/favicon-32x32.png';
import ReactPWAFaviconx96 from './resources/img/favicon-96x96.png';
import ReactPWAFaviconx16 from './resources/img/favicon-16x16.png';

export default class Server {
  // eslint-disable-next-line
  apply(serverHandler) {
    serverHandler.hooks.beforeHtmlRender.tapPromise('DSNPreCache', async (Application) => {
      const { htmlProps: { head } } = Application;
      head.push(<link key="dns-precache-demo-cdn" rel="preconnect" href="https://demo-cdn.reactpwa.com" />);
      head.push(<link key="dns-precache-codefund" rel="preconnect" href="https://codefund.app" />);
      head.push(<link key="dns-precache-google-analytics" rel="preconnect" href="https://www.google-analytics.com" />);
      head.push(<link key="dns-precache-googletagmanager" rel="preconnect" href="https://www.googletagmanager.com" />);
      head.push(<link key="dns-precache-cdn-codefund" rel="preconnect" href="https://cdn2.codefund.app" />);
      head.push(<meta key="meta-theme-color" name="theme-color" content="#209cee" />);
      //
    });

    serverHandler.hooks.beforeHtmlRender.tapPromise('AddFavIcon', async (Application) => {
      const { htmlProps: { head } } = Application;
      head.push(<link key="favicon" rel="shortcut icon" type="image/png" href={ReactPWAIcon} />);
      head.push(<link key="favicon" rel="apple-touch-icon" type="image/png" sizes="57x57" href={ReactPWAAppleIconx57} />);
      head.push(<link key="favicon" rel="apple-touch-icon" type="image/png" sizes="60x60" href={ReactPWAAppleIconx60} />);
      head.push(<link key="favicon" rel="apple-touch-icon" type="image/png" sizes="72x72" href={ReactPWAAppleIconx72} />);
      head.push(<link key="favicon" rel="apple-touch-icon" type="image/png" sizes="76x76" href={ReactPWAAppleIconx76} />);
      head.push(<link key="favicon" rel="apple-touch-icon" type="image/png" sizes="114x114" href={ReactPWAAppleIconx114} />);
      head.push(<link key="favicon" rel="apple-touch-icon" type="image/png" sizes="120x120" href={ReactPWAAppleIconx120} />);
      head.push(<link key="favicon" rel="apple-touch-icon" type="image/png" sizes="144x144" href={ReactPWAAppleIconx144} />);
      head.push(<link key="favicon" rel="apple-touch-icon" type="image/png" sizes="152x152" href={ReactPWAAppleIconx152} />);
      head.push(<link key="favicon" rel="apple-touch-icon" type="image/png" sizes="180x180" href={ReactPWAAppleIconx180} />);
      head.push(<link key="favicon" rel="icon" type="image/png" sizes="192x192" href={ReactPWAAndroidIconx192} />);
      head.push(<link key="favicon" rel="icon" type="image/png" sizes="512x512" href={ReactPWAFaviconx512} />);
      head.push(<link key="favicon" rel="icon" type="image/png" sizes="192x192" href={ReactPWAFaviconx192} />);
      head.push(<link key="favicon" rel="icon" type="image/png" sizes="32x32" href={ReactPWAFaviconx32} />);
      head.push(<link key="favicon" rel="icon" type="image/png" sizes="96x96" href={ReactPWAFaviconx96} />);
      head.push(<link key="favicon" rel="icon" type="image/png" sizes="16x16" href={ReactPWAFaviconx16} />);
      return true;
    });

    serverHandler.hooks.beforeHtmlRender.tapPromise('AddCodeFundScript', async (Application) => {
      Application.htmlProps.footer.push(<script id="js-codefund" async key="codefund" data-src="https://codefund.app/properties/136/funder.js" />);
    });

    serverHandler.hooks.beforeHtmlRender.tapPromise('AddGoogleTracking', async (Application) => {
      Application.htmlProps.footer.push(<script async key="googleanalyticslink" src="https://www.googletagmanager.com/gtag/js?id=UA-108804791-2" />);
      Application.htmlProps.footer.push(<script
        key="googleanalyticsscript"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-108804791-2');`,
        }}
      />);
    });
  }
}
