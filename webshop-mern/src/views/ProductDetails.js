import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, clearProduct } from '../store/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';


const ProductDetails = () => {

  
  const dispatch = useDispatch();
  const id = useParams().id;
  
  useEffect(() => {
    dispatch(getProduct(id))
    return () => {
      dispatch(clearProduct())
    }
  }, [dispatch, id])

  const product = useSelector(state => state.productReducer.product)
  const loading = useSelector(state => state.productReducer.loading)
  const error = useSelector(state => state.productReducer.error)

  return (
    <div>
      {product && <div className="container my-5 py-5">
      <section className="text-center">
        <h3 className="mb-5 font-weight-bold">Product Details</h3>
        <div className="row align-items-center gx-5">
          <div className="col-lg-6">          
            <img src={product.image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <div>
              <h2 className="text-center font-weight-bold mb-5">{ product.name }</h2>
              <div className="mb-5">
                <h5 className="mb-3">Description</h5>
                <p>{ product.desc }</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h3><span className="text-danger">{ product.price }</span> SEK</h3>
              <button className="btn btn-primary" onClick={() => {dispatch(addToCart(product))}}>Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>}
 

    {loading && <div className="text-center mt-5">
      Loading.....
    </div>}
    {error && <div className="text-center mt-5">
      {error}
    </div>}
  </div>

  )
}

export default ProductDetails
