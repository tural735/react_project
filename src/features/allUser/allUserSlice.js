
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { getAllUserThunk } from "./allUserThunk";

const initialState={
    isLoading:false,
    error:'',
    page:1,
    totalPage:0,
    per_page:0,
    totalrecord:0,
    users:''
}

export const getAllUser=createAsyncThunk('getAllUser',getAllUserThunk)

const allUsersSlice=createSlice({
    name:"alluser",
    initialState,
    reducers:{
        changePage:(state,{payload})=>{
            state.page=payload;
        },
    },
    extraReducers:{
        [getAllUser.pending]:(state)=>{
            state.isLoading=true;
        },
        [getAllUser.fulfilled]:(state,{payload})=>{
            state.isLoading=false;
            state.users=payload.data;
            state.totalPage=payload.total_pages;
            state.totalrecord=payload.totalrecord
            state.per_page=payload.per_page;
        },
        [getAllUser.rejected]:(state,{payload})=>{
            state.isLoading=false;
            state.error=payload;
        }
    }
})

export const {changePage}=allUsersSlice.actions;

export default allUsersSlice.reducer;