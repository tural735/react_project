import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addUserToLocalStorage } from "../../utils/localStorage";
import { registerUserThunk } from "./registerThunk";


const initialState={
  isLoading:false,
  data:{},
  success:false,
  error:""
}
export const registerUser=createAsyncThunk('user/register',async(user,thunkAPI)=>{
  return registerUserThunk('authaccount/registration',user,thunkAPI);
})


const registerSlice=createSlice({
  name:'register',
  initialState,
  extraReducers:{
    [registerUser.pending]:(state)=>{
      state.isLoading=true;
      state.success=false;
      state.error='';
    },
    [registerUser.fulfilled]:(state,{payload})=>{
      state.isLoading=false;
      if(payload.code===1){
            state.error=payload.message
            state.success=false
      }else{
            state.success=true;
            toast.success(payload.message)
            addUserToLocalStorage(payload.data.Token)
            state.error='';
            state.data=payload.data;
      }
    },
    [registerUser.rejected]:(state,{payload})=>{
      state.isLoading=false;
      state.success=false;
      state.error=payload;
    }
  }
})

export default registerSlice.reducer;