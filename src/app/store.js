import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import loginSlice from '../features/auth/loginSlice';


export const store=configureStore({
    reducer:{
        auth:authSlice,
        login:loginSlice
    }
})