import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    catgProducts:[],
    loading: false,
}

export const getCatgProducts =  createAsyncThunk('gets/getCatgProd', async (catg) => {
  try{
        return axios.get(`https://fakestoreapi.com/products/category/${catg}`)
        .then( res =>  res.data)
    }
    catch(error){
        console.log(error);
    }
})


const  getCatgProductsSlicer = createSlice({
    name:'products',
    initialState,
    reducers : { },
    extraReducers: (builder) => {
        builder.addCase(getCatgProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCatgProducts.fulfilled, (state, action) => {
            state.loading = false
            state.catgProducts = action.payload
        })
        builder.addCase(getCatgProducts.rejected, (state, action) => {
            state.loading = false
            state.catgProducts = action.payload
        })
    }

})

export default getCatgProductsSlicer.reducer;