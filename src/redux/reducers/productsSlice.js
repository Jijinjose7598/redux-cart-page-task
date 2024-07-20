import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalAmount: 0,
    loading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.map((product) => ({
        ...product,
        count: product.count || 0, // Initialize count to 0 if not provided
      }));
      state.loading = false;
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find(
        (p) => p.id === action.payload.productId
      );

      if (product) {
        product.count += 1;
        state.totalQuantity += 1;
        state.totalAmount += product.price;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(
        (p) => p.id === action.payload.productId
      );
      if (product && product.count > 0) {
        product.count -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= product.price;
      }
    },
  },
});

export const { setProducts, incrementQuantity, decrementQuantity } =
  productsSlice.actions;

export default productsSlice.reducer;
