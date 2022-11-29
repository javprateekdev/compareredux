import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import property1Reducer from './property1Slice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        property1:property1Reducer
    }
});

export default store;