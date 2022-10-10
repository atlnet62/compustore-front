import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product.slice";
import categoryReducer from "./slices/category.slice";
import userReducer from "./slices/user.slice";
import cartReducer from './slices/cart.slice';

const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        user: userReducer,
        cart:cartReducer,
    },
});

export default store;
