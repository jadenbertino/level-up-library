import { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0 };

function cartReducer(state, action) {
  // state comes from useReducer hook
  // action is the first (and only) arg of dispatch function
  switch (action.type) {
    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
