import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/Actions";

const initialState = {
  cart: [],
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cart: [...state.cart, action.id] };

    case REMOVE_FROM_CART:
      const remainingCart = state.cart.filter((item) => item !== item.id);
      return { cart: remainingCart};
    default:
      return state;
  }
};
export default Reducers;