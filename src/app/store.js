import {configureStore} from '@reduxjs/toolkit';
import allUserSlice from '../features/allUser/allUserSlice';
import authSlice from '../features/auth/authSlice';
import loginSlice from '../features/auth/loginSlice';
import registerSlice from '../features/auth/registerSlice';


export const store=configureStore({
    reducer:{
        auth:authSlice,
        login:loginSlice,
        register:registerSlice,
        allUser:allUserSlice
    }
})