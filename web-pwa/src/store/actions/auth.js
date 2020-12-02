
import setAuthToken from '../../utils/set-token'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

import { api } from '../../config/index'

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const USER_LOADED = 'USER_LOADED'
export const AUTH_ERROR = 'AUTH_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const userSignup = (userData, history) => async dispatch => {
  await axios
    .post(`${api.url}/api/auth/signup`, userData)
    .then(res => history.push('/signin'))
    .catch(err => dispatch({ type: REGISTER_FAIL, payload: err }))
}


export const userSignin = userData => async dispatch => {

  await axios.post(`${api.url}/api/auth/signin`, userData)
    .then(res => {
      const { authToken } = res.data
      localStorage.setItem('jwtToken', authToken)
      setAuthToken(authToken)
      const decoded = jwt_decode(authToken)
      dispatch(setCurrentUser(decoded))
      dispatch({ type: LOGIN_SUCCESS })
    })
    .catch(err => {
      // const errors = err.response.data.errors
      // if (errors) errors.forEach(error => dispatch(setAlert(error.msg, 'error')))
      dispatch({ type: LOGIN_FAIL })
    })
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  }
}

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  dispatch(setCurrentUser({}))
}

