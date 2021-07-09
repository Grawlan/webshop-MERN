import actiontypes from '../actiontypes';

const initState = {
  order: null,
  loading: false,
  error: undefined
}

const orderReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().order.clear:
      return {
        ...state,
        order: null
      }
      
    case actiontypes().order.loading:
      return {
        ...state,
        loading: true
      }

    case actiontypes().order.success:
      return {
        ...state,
        loading: false,
        order: action.payload,
        error: undefined
      }

    case actiontypes().order.failure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default orderReducer;