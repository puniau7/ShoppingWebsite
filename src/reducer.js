export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [
    {
      id: "1242435",
      title:
        "Essential Blends Organic Hot Smoked Paprika - 40 GM (Pack of 1) | No Artificial Colour | No Preservative",
      price: 20,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/7137MjDB%2BbL._SL1500_.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //login for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_FROM_BASKET":
      //logic to remove item
      let newbasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        //item exists in basket, remove it
        newbasket.splice(index, 1);
      } else {
        console.warn(`cant remove product with id  ${action.id}`);
      }
      return { ...state, basket: newbasket };
      break;

    default:
      return state;
  }
};
export default reducer;
