import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartProduct from './ShoppingCartProduct';
import { clearCart, placeOrder } from '../../store/actions/cartActions';

const ShoppingCart = () => {
  
  const dispatch = useDispatch();

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)
  const shoppingCartTotal = useSelector(state => state.cartReducer.shoppingCartTotal)
  const userId = useSelector(state => state.authReducer.userId)

  const clear = e => {
    e.stopPropagation()
    dispatch(clearCart())    
  }

  const saveOrder = e => {
    e.stopPropagation()
    const order = {
      orderItems: shoppingCart,
      orderTotal: shoppingCartTotal,
      orderUserId: userId,
    }
    dispatch(placeOrder(order))
    dispatch(clearCart())
  }
  return (
    <div>
      {
        shoppingCart.map(item => (
          <ShoppingCartProduct item={item} key={item.product._id}/>
        ))
      }
      {!shoppingCart.length &&  
      <div className="p-2 d-flex justify-content-center align-items-center">
        Your shopping cart is empty.
      </div>}
        
      <div className="dropdown-divider"></div>
      
      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Total: <span>{ shoppingCartTotal } SEK</span>
          </div>
          <small className="text-muted">inc. VAT</small>
        </div>
          <button className="btn btn-primary" onClick={clear}>Empty Cart</button>
          <button className="btn btn-primary" onClick={saveOrder}>Save Order</button>
        </div>

    </div>
  )
}

export default ShoppingCart
