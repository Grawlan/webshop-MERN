import axios from 'axios';
import actiontypes from '../actiontypes';

export const getOrders = () => {
  return dispatch => {
    dispatch(loading())
    axios.get('http://localhost:5000/api/orders/')
    .then(res => {
      dispatch(success(res.data))
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
  }
}
export const getUserOrders = (id) => {
  return dispatch => {
    dispatch(loading())
    axios.get(`http://localhost:5000/api/orders/${id}`)
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
    type: actiontypes().orders.loading
  }
}

export const success = (orders) => {
  return {
    type: actiontypes().orders.success,
    payload: orders
  }
}

export const failure = (error) => {
  return {
    type: actiontypes().orders.failure,
    payload: error
  }
}