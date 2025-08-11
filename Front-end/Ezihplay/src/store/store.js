import { configureStore } from '@reduxjs/toolkit';

import userReducer from "./features/users/user"
import userInfoReducer from "./features/users/Userinfo"
import { loginAPI } from '../servies/auth/login';
import { singupAPI } from '../servies/auth/signup';



const store = configureStore({
    reducer:{
        userinfo: userInfoReducer,
         user: userReducer,
         [loginAPI.reducerPath]: loginAPI.reducer,
         [singupAPI.reducerPath]: singupAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginAPI.middleware,singupAPI.middleware),
});

export default store;