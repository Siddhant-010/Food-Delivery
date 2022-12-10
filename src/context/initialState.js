import { fectchCart, fectchUser } from "../utils/fetchLocalStorageData";

const userInfo = fectchUser();
const cartInfo = fectchCart();

export const initialState = {
  user: userInfo,
  foodItem: null,
  cartShow: false,
  cartItems: cartInfo,
};
