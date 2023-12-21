import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers : {
        increment : (state) => {
            state.count += 1;
        },
        decrement : (state) => {
            state.count -= 1;
        },
        reset : (state) => {
            state.count = 0;
        },
        actionsByAmount : (state, action) => {
            action.payload.type === 'add' ? state.count += action.payload.amt : state.count -= action.payload.amt;
        }
    }
})

export const {increment, decrement, reset, actionsByAmount} = counterSlice.actions;

export default counterSlice.reducer;