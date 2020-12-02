import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import React, { Fragment, useEffect } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './store'

import setAuthToken from './utils/set-token'
import jwt_decode from 'jwt-decode'


import {
  setCurrentUser,
  // logoutUser,
  // clearCurrentProfile,
} from './store/actions/auth.js'

import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'

import withErrorHandler from 'errorHandling'
import { App as ErrorBoundaryFallback } from 'errorHandling/Fallbacks'

import Layout from 'sections/Layout'
import { ThemeProvider } from 'theme'
import { StoreProvider } from 'store'

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken, { session: false })
  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    // store.dispatch(logoutUser())
    // store.dispatch(clearCurrentProfile())
    window.location.href = '/signin'
  }
}

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Box display="flex">
          <CssBaseline />
          <Router>
            <Layout />
          </Router>
        </Box>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default withErrorHandler(App, ErrorBoundaryFallback)
