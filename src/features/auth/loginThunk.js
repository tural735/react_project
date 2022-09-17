import customFetch from "../../utils/axios";


export const loginUserThunk=async(url,user,thunkAPI)=>{
  try {
    const resp=await customFetch.post(url,user);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status)
  }
}