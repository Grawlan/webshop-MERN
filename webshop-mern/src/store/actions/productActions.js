import axios from 'axios';
import actiontypes from '../actiontypes';

export const getProduct = (id) => {
  return dispatch => {
    dispatch(loading())
    axios.get(`http://localhost:5000/api/products/${id}`)
    .then(res => {
      dispatch(success(res.data))
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
  }
}

export const clearProduct = () => {
  return{
    type: actiontypes().product.clear
  }
}
export const loading = () => {
  return {
    type: actiontypes().product.loading
  }
}

export const success = (product) => {
  return {
    type: actiontypes().product.success,
    payload: product
  }
}

export const failure = (error) => {
  return {
    type: actiontypes().product.failure,
    payload: error
  }
}