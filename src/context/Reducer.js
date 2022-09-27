export default (state, action) => {
  switch (action.type) {
    //ADD_TO_BASKET
    case "ADD_TO_BASKET":
      // console.log(state);
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    //SET_USER
    case "SET_USER":
      console.log(state);
      return {
        ...state,
        user: action.payload,
      };
    //REMOVE_FROM_BASKET
    case "REMOVE_FROM_BASKET":
      console.log(action.payload);
      return {
        ...state,
        basket: state.basket.filter((baskets) => baskets.id !== action.payload),
      };

    default:
      return state;
  }
};
