import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localStorage";


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
    }
})

export const {changeAuth}=authSlice.actions;

export default authSlice.reducer;