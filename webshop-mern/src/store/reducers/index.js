import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import ordersReducer from './ordersReducer';
import orderReducer from './orderReducer';


export default combineReducers({
  productsReducer,
  productReducer,
  cartReducer,
  authReducer,
  ordersReducer,
  orderReducer
})