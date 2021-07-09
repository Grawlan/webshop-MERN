import actiontypes from '../actiontypes';

const initState = {
  product: null,
  loading: false,
  error: undefined
}

const productReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().product.clear:
      return {
        ...state,
        product: null
      }
      
    case actiontypes().product.loading:
      return {
        ...state,
        loading: true
      }

    case actiontypes().product.success:
      return {
        ...state,
        loading: false,
        product: action.payload
      }

    case actiontypes().product.failure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default productReducer;