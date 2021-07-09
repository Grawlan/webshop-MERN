import axios from 'axios';
import actiontypes from '../actiontypes';


export const getOrder = (id) => {
  return dispatch => {
    dispatch(loading())
    axios.get(`http://localhost:5000/api/orders/orderdetails/${id}`)
    .then(res => {
      dispatch(success(res.data))
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
  }
}
export const updateOrder = (order) => {
  console.log(order);
  order = {
    ...order,
    orderComplete: !order.orderComplete
  }
  console.log(order);

  return dispatch => {
    dispatch(loading())
    axios.patch(`http://localhost:5000/api/orders/${order._id}`, order)
    .then(() => {
      dispatch(success(order))
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
  }
}
export const DeleteOrder = (id, cb) => {
  return dispatch => {
    dispatch(loading())
    axios.delete(`http://localhost:5000/api/orders/${id}`)
    .then(() => {
      cb()
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
  }
}


export const clearOrder = () => {
  return{
    type: actiontypes().order.clear
  }
}
export const loading = () => {
  return {
    type: actiontypes().order.loading
  }
}

export const success = (order) => {
  return {
    type: actiontypes().order.success,
    payload: order
  }
}

export const failure = (error) => {
  return {
    type: actiontypes().order.failure,
    payload: error
  }
}