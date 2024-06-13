import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    restaurantData:null,
    loading: false,
}

export const getRestaurants =  createAsyncThunk('get/getUser', async () => {
  try{
        return axios.get('http://127.0.0.1:7001/api/restaurant/6630ed1d19b8ae9b45127cc6')
        .then( res =>  res.data)
    }
    catch(error){
        console.log(error);
    }
})


const getRestaurantSlicer = createSlice({
    name:'singleRestaurantData',
    initialState,
    reducers : { 
    },
    extraReducers: (builder) => {
        builder.addCase(getRestaurants.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getRestaurants.fulfilled, (state, action) => {
            state.loading = false
            state.restaurantData = action.payload.data
        })
        builder.addCase(getRestaurants.rejected, (state, action) => {
            state.loading = false
            state.restaurantData = action.payload
        })
    }

})

export default getRestaurantSlicer.reducer;