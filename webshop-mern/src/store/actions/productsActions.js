import axios from 'axios';
import actiontypes from '../actiontypes';

export const getProducts = () => {
  return dispatch => {
    dispatch(loading())
    axios.get('http://localhost:5000/api/products')
    .then(res => {
      dispatch(success(res.data))
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
  }
}

export const loading = () => {
  return {
    type: actiontypes().products.loading
  }
}

export const success = (products) => {
  return {
    type: actiontypes().products.success,
    payload: products
  }
}

export const failure = (error) => {
  return {
    type: actiontypes().products.failure,
    payload: error
  }
}