import ReduxServer from '@pawjs/redux/server'
import * as reducers from './reducers'
import React from 'react';
import FavIcon from './resources/img/icon-512x512.png';

export default class Server {
  
  constructor({ addPlugin }) {
    const reduxServer = new ReduxServer({ addPlugin });
    reduxServer.setReducers(reducers);
    addPlugin(reduxServer);
  }

  // eslint-disable-next-line
  apply(serverHandler) {

    serverHandler.hooks.reduxInitialState.tapPromise('ReduxInitialState', async ({ getInitialState, setInitialState }) => {
      const initialState = Object.assign({}, getInitialState(), appInitialState)
      setInitialState(initialState)
    })

    serverHandler.hooks.beforeHtmlRender.tapPromise('DSNPreCache', async (Application) => {
      const { htmlProps: { head } } = Application;
      head.push(<link key="dns-precache-demo-cdn" rel="preconnect" href="https://demo-cdn.reactpwa.com" />);
      head.push(<link key="dns-precache-google-analytics" rel="preconnect" href="https://www.google-analytics.com" />);
      head.push(<link key="dns-precache-googletagmanager" rel="preconnect" href="https://www.googletagmanager.com" />);
      head.push(<meta key="meta-theme-color" name="theme-color" content="#209cee" />);
      //
    });

    serverHandler.hooks.beforeHtmlRender.tapPromise('AddFavIcon', async (Application) => {
      const { htmlProps: { head } } = Application;
      head.push(<link key="favicon" rel="shortcut icon" type="image/png" href={FavIcon} />);
      return true;
    });

    serverHandler.hooks.beforeHtmlRender.tapPromise('AddGoogleTracking', async (Application) => {
      Application.htmlProps.footer.push(<script async key="googleanalyticslink" src="https://www.googletagmanager.com/gtag/js?id=UA-138710325-1" />);
      Application.htmlProps.footer.push(<script
        key="googleanalyticsscript"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-138710325-1');`,
        }}
      />);
    });
  }
}
