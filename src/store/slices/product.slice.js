import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productList: [],
    },
    reducers: {
        loadProducts(state, action) {
            state.productList = [...action.payload];
        },
    },
});

export const { loadProducts } = productSlice.actions;
export default productSlice.reducer;
