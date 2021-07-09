import actiontypes from '../actiontypes';



const initState = {
  userId: null,
  userToken: null,
  userEmail: null,
  loading: false,
  error: undefined,
  admin: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().auth.loading:
      return {
        ...state,
        loading: true
      }

    case actiontypes().auth.success:
      return {
        ...state,
        userId: action.payload.user._id,
        userToken: action.payload.token,
        userEmail: action.payload.user.email,
        admin: action.payload.user.admin,
        loading: false,
        error: undefined
      }

    case actiontypes().auth.failure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case actiontypes().auth.logout:
      return {
        ...initState
      }

    default:
      return state
  }
}

export default authReducer;