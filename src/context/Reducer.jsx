export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
        total: state.total + action.payload.qty * action.payload.price,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
        total: state.total - action.payload.qty * action.payload.price,
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((c) =>
          c.id === action.payload && c.qty > 1 ? { ...c, qty: c.qty - 1 } : c
        ),
        total: state.total + action.payload.price,
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((c) =>
          c.id === action.payload && c.qty > 1 ? { ...c, qty: c.qty + 1 } : c
        ),
        total: state.total - action.payload.price,
      };
    // case "CHANGE_CART_QTY":
    //   return {
    //     ...state,
    //     cart: state.cart.filter((c) =>
    //       c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
    //     ),
    //   };

    default:
      return state;
  }
};
