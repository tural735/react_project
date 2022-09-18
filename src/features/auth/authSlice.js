import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";


const initialState={
    user:getUserFromLocalStorage(),
    register:true,
}


const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        changeAuth:(state)=>{
            state.register=!state.register;
        },
        logoutUser:(state)=>{
            window.location.href='/';
            removeUserFromLocalStorage();
        }
    }
})

export const {changeAuth,logoutUser}=authSlice.actions;

export default authSlice.reducer;