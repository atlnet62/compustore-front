import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categoryList: [],
    },
    reducers: {
        loadCategories(state, action) {
            state.categoryList = [...action.payload];
        },
    },
});

export const { loadCategories } = categorySlice.actions;
export default categorySlice.reducer;
