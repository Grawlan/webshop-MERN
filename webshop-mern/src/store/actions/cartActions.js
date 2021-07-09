import actiontypes from '../actiontypes';
import axios from 'axios'

export const addToCart = product => {
  return {
    type: actiontypes().cart.add,
    payload: product
  }
}

export const removeFromCart = item => {
  return dispatch => {
    if( item.quantity === 1 ) {
      dispatch(deleteProduct(item.product._id))
    } 
    else {
      dispatch(sub(item))
    }
  }
}

export const deleteProduct = id => {
  return {
    type: actiontypes().cart.delete,
    payload: id
  }
}

export const sub = product => {
  return {
    type: actiontypes().cart.sub,
    payload: product
    }
}

export const clearCart = () => {
  return {
    type: actiontypes().cart.clear,
  }
}

export const placeOrder = (order) => {
  return () => {

    axios.post('http://localhost:5000/api/orders/', order)
  }
}