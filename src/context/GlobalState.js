import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
  basket: [],
  user: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToBasket(item) {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  }
  function removeFromBasket(id) {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  }
  function setUser(item) {
    // dispatch the item into the data layer
    dispatch({
      type: "SET_USER",
      payload: item,
    });
  }
  // console.log(state);

  return (
    <GlobalContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        addToBasket,
        removeFromBasket,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
