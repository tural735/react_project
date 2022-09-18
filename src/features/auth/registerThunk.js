import customFetch from "../../utils/axios";


export const registerUserThunk=async(url,user,thunkAPI)=>{
  try {
    const resp=await customFetch.post(url,user,{
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status)
  }
}