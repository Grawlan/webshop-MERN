import actiontypes from "../actiontypes";

const initState = {
  shoppingCart: [],
  totalCartQuantity: 0,
  shoppingCartTotal: 0
}

const cartReducer = (state = initState, action) => {
  let itemIndex
  switch(action.type) {
    case actiontypes().cart.add:
      itemIndex = state.shoppingCart.findIndex(item => item.product._id === action.payload._id)
      console.log(itemIndex);
      itemIndex < 0
      ? state.shoppingCart = [...state.shoppingCart, {product: action.payload, quantity: 1}]
      : state.shoppingCart[itemIndex].quantity += 1

      state.shoppingCartTotal = getShoppingCartTotal(state.shoppingCart)
      state.totalCartQuantity = getTotalQuantity(state.shoppingCart)

      return state

    case actiontypes().cart.sub:
      action.payload.quantity -= 1
      state.shoppingCartTotal = getShoppingCartTotal(state.shoppingCart)
      state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
      return state

    case actiontypes().cart.delete:
      state.shoppingCart = state.shoppingCart.filter(item => item.product._id !== action.payload)
      state.shoppingCartTotal = getShoppingCartTotal(state.shoppingCart)
      state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
      return state

    case actiontypes().cart.clear:
      state.shoppingCart = []
      state.shoppingCartTotal = getShoppingCartTotal(state.shoppingCart)
      state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
      return state

    default:
      return state
  }
}


const getTotalQuantity = cart => {
  let total = 0;
  cart.forEach(item => {
    total += item.quantity
  })
  return total;
}

const getShoppingCartTotal = cart => {
  let total = 0;

  cart.forEach(item => {
    total += item.product.price * item.quantity
  })

  return total;
}

export default cartReducer;