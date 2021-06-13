import { useSelector } from 'react-redux'
import Product from '../components/Product'


const Products = () => {
  
  const products = useSelector(state => state.productsReducer.products)

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {
        products.map(product => (
          <Product key={product._id} product={product} />
        ))
      }
      </div>
    </div>
  )
}

export default Products