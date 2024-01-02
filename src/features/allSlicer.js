import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: '',
    sortingType: 1,
    category: 'All',
    navIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    cart: [],
    fav:[],
    totalAmount: 0,
    customerInformation:{}
}

const findIndexForCart = (val, arr) => {
    return arr.findIndex(e => e.product.id === val.product.id && e.specs.color === val.specs.color && e.specs.size === val.specs.size)
}

const findIndexForFav = (val, arr) => {
    return arr.findIndex(e => e.id === val)
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
        setAddFavItem: (state, { payload }) => {
            state.fav.push(payload)
        },
        setDeleteFavItem: (state, { payload }) => {
            const removeId = findIndexForFav(payload, state.fav)
            state.fav.splice(removeId, 1)
        },
        setAddCartItem: (state, { payload }) => {
            state.cart.push(payload)
        },
        setDeleteCartItem: (state, { payload }) => {
            const removeId = findIndexForCart(payload, state.cart)
            state.cart.splice(removeId, 1)
        },
        setCartItemQuantity: (state, { payload }) => {
            const addQuan = findIndexForCart(payload.data, state.cart);
            let q = state.cart[addQuan].specs.quantity;
            let p = state.cart[addQuan].product.price;
            if (payload.add) {
                state.cart[addQuan].specs.quantity = q + 1;
                let num = (q+1) * p;
                state.cart[addQuan].specs.amount = num.toFixed(2);
            } else {
                state.cart[addQuan].specs.quantity = q - 1;
                let num = (q-1) * p;
                state.cart[addQuan].specs.amount = num.toFixed(2);
            }
        },
        setCustomerInformation:(state, {payload}) => {
            state.customerInformation = {...payload}
        }

    },

})

export const { setTheme, setSortingType, setCategory, setNavIds, setAddFavItem, setDeleteFavItem, setCartItems, setAddCartItem, setDeleteCartItem, setCartItemQuantity, setCustomerInformation } = getAllSlicer.actions;
export default getAllSlicer.reducer;