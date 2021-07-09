import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, deleteProduct, removeFromCart } from '../../store/actions/cartActions'


const ShoppingCartProduct = ({item, order}) => {

  const dispatch = useDispatch();

  const add = e => {
    e.stopPropagation()
    dispatch(addToCart(item.product))
  }

  const sub = e => {
    e.stopPropagation()
    dispatch(removeFromCart(item))
  }

  const del = e => {
    e.stopPropagation()
    dispatch(deleteProduct(item.product._id))
  }

  return (
    <div className="cart-item">
    <div className="p-2 d-flex justify-content-between align-items-center">

      <div className="d-flex align-items-center">
        <img src={ item.product.image } alt="" className="img-fluid image-width"/>
        <div>
          <div><strong>{ item.product.name }</strong></div>
          <div><small>{ item.quantity } x { item.product.price } SEK</small></div>
        </div>
      </div>

      {
        !order && 
        <div>
          <div className="btn-group btn-group-sm me-2" role="group">
            <button className="btn btn-dark" onClick={sub}>-</button>
            <button className="btn btn-dark" onClick={add}>+</button>
          </div>
          <button className="btn btn-danger btn-sm" onClick={del}><i className="fas fa-trash"></i></button>
        </div>
      }

    </div>

    <div className="dropdown-divider"></div>
  </div>
  )
}

export default ShoppingCartProduct
