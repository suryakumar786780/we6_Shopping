import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    product:{},
    loading: false
}

export const getItem =  createAsyncThunk('get/getItem', async (id) => {
  try{
        return axios.get(`https://fakestoreapi.com/products/${id}`)
        .then( res =>  res.data)
    }
    catch(error){
        console.log(error);
    }
})

const  getSingleItemSlicer = createSlice({
    name:'product',
    initialState,
    reducers : { },
    extraReducers: (builder) => {
        builder.addCase(getItem.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getItem.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        })
        builder.addCase(getItem.rejected, (state, action) => {
            state.loading = false
            state.product = action.payload
        })
    }

})

export default getSingleItemSlicer.reducer;