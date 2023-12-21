import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    categories:[],
    loading: false,
}

export const getCategories =  createAsyncThunk('gets/getCategories', async () => {
  try{
        return axios.get('https://fakestoreapi.com/products/categories')
        .then( res =>  res.data)
    }
    catch(error){
        console.log(error);
    }
})


const  getCategoriesSlicer = createSlice({
    name:'products',
    initialState,
    reducers : { },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.loading = false
            state.categories = action.payload
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            state.loading = false
            state.categories = action.payload
        })
    }

})

export default getCategoriesSlicer.reducer;