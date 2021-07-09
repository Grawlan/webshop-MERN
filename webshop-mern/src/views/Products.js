import { useSelector } from 'react-redux'
import Product from '../components/Product'


const Products = () => {
  
  const products = useSelector(state => state.productsReducer.products)
  const loading = useSelector(state => state.productsReducer.loading)
  const error = useSelector(state => state.productsReducer.error)

  return (
    <div className="container mt-5">
    {products &&
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {
        products.map(product => (
          <Product key={product._id} product={product} />
        ))
      }
      </div>}
      {loading && <div>
        Loading ...
      </div>}
      {error && <div>
        {error}
      </div>}
    </div>
  )
}

export default Products