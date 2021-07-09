import React from 'react'
import { Link } from 'react-router-dom'
import {  } from '../store/actions/ordersActions'

const Order = ({order}) => {
  
  

  return (
    <div className="col">
      <Link to={`/orders/${order._id}`} className="text-dark">
      <div className="card h-100 p-3">
        <div className="card-body">
          <h5 className="card-title text-center mb-3">Order Id: { order._id }</h5>
          <p className="card-text">User Id: { order.orderUserId }</p>
          <p className="card-text text-danger"> Price: { order.orderTotal } SEK</p>
          <p className="card-text">Order Completed: {order.orderComplete ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </Link>
      </div>  
    
  )
}

export default Order
