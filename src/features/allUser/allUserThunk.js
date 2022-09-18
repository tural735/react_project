import customFetch from "../../utils/axios";
import { removeUserFromLocalStorage } from "../../utils/localStorage";


export const getAllUserThunk=async(_,thunkAPI)=>{
    const {page}=thunkAPI.getState().allUser;
    const {user}=thunkAPI.getState().auth;
  try {
    const resp=await customFetch.get(`/users?page=${page}`,{
      headers:{
        'Authorization':`Bearer ${user}`,
      }
    });
    return resp.data;
  } catch (error) {
        if(error.response.status){
            return removeUserFromLocalStorage()
        }else{
            return thunkAPI.rejectWithValue(error.message); 
        }
  }
}