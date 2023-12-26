import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: '',
    sortingType: 1,
    category: 'All',
    navIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    cart: [],
}

const getAllSlicer = createSlice({
    name: 'all',
    initialState,
    reducers: {
        setTheme: (state, { payload }) => {
            state.theme = payload;
        },
        setSortingType: (state, { payload }) => {
            state.sortingType = payload;
        },
        setCategory: (state, { payload }) => {
            state.category = payload
        },
        setNavIds: (state, { payload }) => {
            state.navIds = payload
        },
        setCartItems: (state, { payload }) => {
            payload.add ? state.cart = [...state.cart, payload.data] : state.cart = payload.data
        },
    },

})



export const { setTheme, setSortingType, setCategory, setNavIds, setCartItems } = getAllSlicer.actions;
export default getAllSlicer.reducer;