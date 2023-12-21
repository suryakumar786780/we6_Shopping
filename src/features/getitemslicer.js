import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[],
    loading: false,
}

export const getItems =  createAsyncThunk('gets/getItems', async () => {
  try{
        return axios.get('https://fakestoreapi.com/products')
        .then( res =>  res.data)
    }
    catch(error){
        console.log(error);
    }
})


const getItemSlicer = createSlice({
    name:'products',
    initialState,
    reducers : { 
    },
    extraReducers: (builder) => {
        builder.addCase(getItems.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getItems.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(getItems.rejected, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
    }

})

export default getItemSlicer.reducer;