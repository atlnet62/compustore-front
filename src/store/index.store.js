import {configureStore} from '@reduxjs/toolkit';

import productReducer from './slices/product.slice';
import userReducer from './slices/user.slice';


const store = configureStore({
    reducer: {
        products: productReducer,
        user: userReducer
    }
});

export default store;