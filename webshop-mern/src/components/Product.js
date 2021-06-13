import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div className="col">
      <div className="card h-100 p-3">
        <img src={ product.image } alt="..." className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{ product.name }</h5>
          <p className="card-text">{ product.short }</p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <Link to="/" type="button" className="btn btn-primary">Show Product</Link>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Product
