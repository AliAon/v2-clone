import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    subtotal: null,
    total: null,
    vendorId: null,
    orderResponse: null,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const product = action.payload;
      const productFound = state.cart.find(
        (item) => item.product_id === product.product_id
      );
      if (productFound) {
        productFound.quantity += product.quantity;
        return;
      }
      state.cart.push(product);
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    RemoveCart: (state, action) => {
      state.cart = [];
    },
    addSubTotal: (state, action) => {
      state.subtotal = action.payload;
    },
    addTotal: (state, action) => {
      state.total = action.payload;
    },
    addVendorId: (state, action) => {
      state.vendorId = action.payload;
    },
    addOrderResponse: (state, action) => {
      state.orderResponse = action.payload;
    },
    removeItemFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.product_id !== productId);
    },
    updateCartItemQuantity: (state, action) => {
      const { product_id, quantity } = action.payload;
      const item = state.cart.find((item) => item.product_id === product_id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const {
  addItemToCart,
  updateCart,
  addTotal,
  addSubTotal,
  addVendorId,
  RemoveCart,
  addOrderResponse,
  removeItemFromCart,
  updateCartItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
