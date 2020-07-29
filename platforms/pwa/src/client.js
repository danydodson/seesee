import ReduxClient from '@pawjs/redux/client'
import * as AppReducers from './reducers'

const appInitialState = {}

// Bulma CSS for light weight CSS. One can any css framework
import 'bulma/css/bulma.min.css'
import './resources/css/util.scss'
import './resources/css/global.css'

export default class Client {

  static googleTrack() {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'UA-108804791-2', {
        page_path: window.location.pathname,
      })
    }
  }

  constructor({ addPlugin }) {
    const reduxClient = new ReduxClient({ addPlugin })
    reduxClient.setReducers(AppReducers)

    addPlugin(reduxClient)
  }

  // eslint-disable-next-line
  apply(clientHandler) {

    clientHandler.hooks.reduxInitialState.tapPromise('ReduxInitialState', async ({ getInitialState, setInitialState }) => {
      const initialState = Object.assign({}, getInitialState(), appInitialState)
      setInitialState(initialState)
    })

    clientHandler.hooks.locationChange.tapPromise('ReloadGoogleTrack', async () => Client.googleTrack())
  }
}
