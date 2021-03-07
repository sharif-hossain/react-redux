import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/Actions";

const initialState = {
  cart: [],
  products:[
    
    { name: "laptop", id: 1 },
    { name: "desktop", id: 2 },
    { name: "lenovo", id: 3 },
    { name: "Dell", id: 4 },
  ]
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_TO_CART:
      console.log(action);
      return { ...state,cart: [...state.cart, action.id] };

    case REMOVE_FROM_CART:
      const remainingCart = state.cart.filter((item) => item !== action.id);
      return { ...state,cart: remainingCart};
    default:
      return state;
  }
};
export default Reducers;