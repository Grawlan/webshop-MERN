import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'

const Product = ({product}) => {
  
  const dispatch = useDispatch();

  return (
    <div className="col">
      <div className="card h-100 p-3">
        <img src={ product.image } alt="..." className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{ product.name }</h5>
          <p className="card-text">{ product.short }</p>
          <p className="card-text text-danger"> Price: { product.price } SEK</p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <Link to={`/products/${product._id}`} type="button" className="btn btn-primary">Show Product</Link>
            <button className="btn btn-primary" onClick={() => {dispatch(addToCart(product))}}>Add to cart</button>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Product
