import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    signInStatus:'',
    loginStatus:{
        isLogin:false,
        data:''
    },
    isSignInloading: false,
    isLoginLoading:false,
}

export const signUpUser = createAsyncThunk('signIn/signInUser', async (userData) => {
    try {
        let res = await axios.post('http://127.0.0.1:7001/api/users/signup', userData)
        return res;
    }
    catch (error) {
        return error;
    }
})

export const logInUser =  createAsyncThunk('logIn/logInUser', async (userData) => {
    try{
        let res = await axios.post('http://127.0.0.1:7001/api/users/login', userData)
        return res;
      }
      catch(error){
        return error;
      }
  })

const postAuthUserSlicer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsLogin: (state, { payload }) => {
            state.loginStatus = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signUpUser.pending, (state) => {
            state.isSignInloading = true
        })
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.isSignInloading = false
            state.signInStatus = action;
        })
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.isSignInloading = false;
            state.signInStatus = action;
        })
        builder.addCase(logInUser.pending, (state) => {
            state.isLoginLoading = true
        })
        builder.addCase(logInUser.fulfilled, (state, action) => {
            state.isLoginLoading = false
            state.loginStatus = {
                isLogin:true,
                data:action.payload
            };
        })
        builder.addCase(logInUser.rejected, (state, action) => {
            state.isLoginLoading = false;
            state.loginStatus = action;
        })
    }

})

export const {setIsLogin} = postAuthUserSlicer.actions;
export default postAuthUserSlicer.reducer;