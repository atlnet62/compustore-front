import {configureStore} from '@reduxjs/toolkit';

import productReducer from './slices/product.slice';
import categoryReducer from './slices/category.slice'
import userReducer from './slices/user.slice';


const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        user: userReducer
    }
});

export default store;