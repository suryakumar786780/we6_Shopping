import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortingType:1,
    category : 'All',
    navIds:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
}

const  getAllSlicer = createSlice({
    name:'all',
    initialState,
    reducers : { 
        setSortingType : (state, {payload}) => {
            state.sortingType = payload;
        },
        setCategory : (state, {payload}) => {
            state.category = payload
        },
        setNavIds :  (state, {payload}) => {
            state.navIds = payload
        },
    },

})

export const {setSortingType, setCategory, setNavIds} = getAllSlicer.actions;
export default getAllSlicer.reducer;