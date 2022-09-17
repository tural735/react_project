import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loginUserThunk } from "./loginThunk";


const initialState={
  isLoading:false,
  data:{},
  success:false,
  error:""
}
export const loginUser=createAsyncThunk('user/login',async(user,thunkAPI)=>{
  return loginUserThunk('authaccount/login',user,thunkAPI);
})


const loginSlice=createSlice({
  name:'login',
  initialState,
  extraReducers:{
    [loginUser.pending]:(state)=>{
      state.isLoading=true;
      state.success=false;
      state.error='';
    },
    [loginUser.fulfilled]:(state,{payload})=>{
      state.isLoading=false;
      if(payload.code===1){
            state.error=payload.message
            state.success=false
      }else{
            state.success=true;
            toast.success(payload.message)
            state.error='';
            state.data=payload.data;
      }
    },
    [loginUser.rejected]:(state,{payload})=>{
      state.isLoading=false;
      state.success=false;
      state.error=payload;
    }
  }
})

export default loginSlice.reducer;