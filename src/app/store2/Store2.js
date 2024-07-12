'use client'
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './CartSlice2';

const store2 = configureStore({
    reducer:{
        allCart2: cartReducer,
    },
});

export default store2;