const actiontypes = () => {
  return {
    products: {
      loading: 'PRODUCTS_LOADING',
      success: 'PRODUCTS_SUCCESS',
      failure: 'PRODUCTS_FAILURE',
    },
    product: {
      clear: 'CLEAR_PRODUCT',
      loading: 'PRODUCT_LOADING',
      success: 'PRODUCT_SUCCESS',
      failure: 'PRODUCT_FAILURE',
    }, 
    cart: {
      add: 'ADD_TO_CART',
      sub: 'SUB_FROM_CART',
      delete: 'DELETE_FROM_CART',
      clear: 'CLEAR_CART'
    },
    auth: {
      loading: 'AUTH_LOADING',
      success: 'AUTH_SUCCESS',
      failure: 'AUTH_FAILURE',
      logout:  'AUTH_LOGOUT'
    },
    orders: {
      loading: 'ORDERS_LOADING',
      success: 'ORDERS_SUCCESS',
      failure: 'ORDERS_FAILURE',
    },
    order: {
      clear: 'CLEAR_ORDER',
      loading: 'ORDER_LOADING',
      success: 'ORDER_SUCCESS',
      failure: 'ORDER_FAILURE',
    }
  } 
}

export default actiontypes;