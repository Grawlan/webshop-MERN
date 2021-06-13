import actiontypes from '../actiontypes';

const initState = {
  products: [],
  loading: false,
  error: undefined
}

const productsReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().products.loading:
      return {
        ...state,
        loading: true
      }

    case actiontypes().products.success:
      return {
        ...state,
        loading: false,
        products: action.payload
      }

    case actiontypes().products.failure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default productsReducer;