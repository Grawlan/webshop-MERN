import axios from 'axios';
import jwt from 'jsonwebtoken';
import actiontypes from '../actiontypes';


const apiCall = (url, data, dispatch) => {
  axios.post(url, data)
  .then(res => {
    console.log(res.data);
    dispatch(checkAdmin(res.data.token))
  })
  .catch(err => {
    console.log(err.message);
    dispatch(failure(err.message))
  })
}

export const login = user => {
  return dispatch => {
    dispatch(loading())
    apiCall('http://localhost:5000/api/users/login', user, dispatch)
  }
}

export const register = (user) => {
  return dispatch => {
    dispatch(loading())
    axios.post('http://localhost:5000/api/users/register', user)
    .then(() => {
      dispatch(login({email: user.email, password: user.password}))
    })
    
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  return {
    type: actiontypes().auth.logout
  }
}

export const checkAdmin = token => {
  return dispatch => {
    localStorage.setItem('token', token)
    // const id = result.userId;
    const decodedToken = jwt.decode(token)
    console.log(decodedToken.user);
    dispatch(success({user: decodedToken.user, token}))
  }
}

export const loading = () => {
  return {
    type: actiontypes().auth.loading
  }
}

export const success = (user) => {
  return {
    type: actiontypes().auth.success,
    payload: user
  }
}

export const failure = error => {
  return {
    type: actiontypes().auth.failure,
    payload: error
  }
}

export const checkUser = () => {
  return dispatch => {
    let token = localStorage.getItem('token')
    if(token) {
      console.log(jwt.decode(token).exp);  
      console.log(Date.now());    
      if(jwt.decode(token).exp < Date.now()) {
        dispatch(checkAdmin(token))
      }

      else {
        localStorage.removeItem('token')
      }
    }
  }
}