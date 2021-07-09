import { useSelector, useDispatch } from 'react-redux';
import Order from '../components/Order'
import { useEffect } from 'react';
import { getUserOrders } from '../store/actions/ordersActions';

const UserOrders = () => {

  const dispatch = useDispatch()
  
  const orders = useSelector(state => state.ordersReducer.orders)
  const loading = useSelector(state => state.ordersReducer.loading)
  const error = useSelector(state => state.ordersReducer.error)
  const userId = useSelector(state => state.authReducer.userId)

  useEffect(() => {
     dispatch(getUserOrders(userId))
  
  }, [dispatch, userId])

  return (
    <div className="container mt-5">
      <h1 className="text-center">List of Orders</h1>
    {orders && <div>
      <h3 className="text-center">Incompleted orders</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        
        {
          orders.map(order => {
            if(!order.orderComplete){
              return <Order key={order._id} order={order}/>
            }
            else {
              return ''
            }
          })
        }
        </div>
    </div> 
    }
    
    {orders && <div>
      <h3 className="text-center mt-5">Completed orders</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        
        {
          orders.map(order => {
            if(order.orderComplete){
              return <Order key={order._id} order={order}/>
            }
            else {
              return ''
            }
          })
        }
        </div>
    </div> 
    }
      {loading && <div>
        Loading ...
      </div>}
      {error && <div>
        {error}
      </div>}
    </div>
  )
}

export default UserOrders
