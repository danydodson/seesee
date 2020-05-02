import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import registerServiceWorker from "./serviceWorker"

hydrate(<App />, document.getElementById('root'))
registerServiceWorker()