import { combineReducers, configureStore } from "@reduxjs/toolkit";
import getAllSlicer from '../features/allSlicer'
import getAllProduct from '../features/getitemslicer';
import productReducer from '../features/getSingleItemSlicer';
import categoriesReducer from '../features/getCategoriesSlicer'
import getAllCatgProducts from '../features/getCatgProducts'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';
import { Tuple } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['all',]
}

const rootReducer = combineReducers({
    all: getAllSlicer,
    products: getAllProduct,
    product: productReducer,
    categories: categoriesReducer,
    catgProducts: getAllCatgProducts
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => new Tuple(thunk)
})

export const persistor = persistStore(store)