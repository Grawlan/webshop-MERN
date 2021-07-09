import { useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getOrder, clearOrder, DeleteOrder, updateOrder } from '../store/actions/orderActions';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartProduct from '../components/shoppingCart/ShoppingCartProduct'


const OrderDetails = () => {

  const history = useHistory()
  const dispatch = useDispatch();
  const id = useParams().id;
  
  useEffect(() => {
    dispatch(getOrder(id))
    return () => {
      dispatch(clearOrder())
    }
  }, [dispatch, id])

  const order = useSelector(state => state.orderReducer.order)
  const loading = useSelector(state => state.orderReducer.loading)
  const error = useSelector(state => state.orderReducer.error)
  const isAdmin = useSelector(state => state.authReducer.admin)

  order && console.log(order.orderItems);

  const update = () => {
    dispatch(updateOrder(order))
  }

  const delOrder = () => {
    dispatch(DeleteOrder(order._id, () => {
      history.replace('/users/adminorders')
    }))
    
  }

  return (
    <div>
      {order && <div className="container my-5 py-5">
      <section className="text-center">
        <h3 className="mb-5 font-weight-bold">Order Details</h3>
        <div className="row align-items-center gx-5">
          <div className="col-lg-6 text-center text-lg-start">
            <div>
              <h2 className="text-center font-weight-bold mb-5">Order ID: { order._id }</h2>
              <div className="mb-5">
                {
                  // order.map((orderitem, i) => <p key={i}>order.orderItems[i]</p>)
                  // console.log(order)
                  order.orderItems.map(item => (
                    <ShoppingCartProduct key={item.product._id} item={item} order={true} />
                  ))
                }
                
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h3><span className="text-danger">{ order.orderTotal }</span> SEK</h3>
              { isAdmin && <div>
                <button className="btn btn-primary" onClick={update}>Mark as complete</button>
                <button className="btn btn-danger" onClick={delOrder}>Delete</button>
                </div>}
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

export default OrderDetails
