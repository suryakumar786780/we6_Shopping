import { configureStore } from "@reduxjs/toolkit";

import getAllSlicer from '../features/allSlicer'
import getAllProduct from '../features/getitemslicer';
import productReducer from '../features/getSingleItemSlicer';
import categoriesReducer from '../features/getCategoriesSlicer'
import getAllCatgProducts from '../features/getCatgProducts'

export const store = configureStore({
    reducer: {
        all : getAllSlicer,
        products: getAllProduct,
        product: productReducer,
        categories: categoriesReducer,
        catgProducts: getAllCatgProducts
    }
})


