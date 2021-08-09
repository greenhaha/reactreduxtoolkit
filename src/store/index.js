import {configureStore} from '@reduxjs/toolkit';
import moveSlice from './features/moveSlice';
import counterSlice from './features/counterSlice';
export default configureStore({
    reducer:{
        move: moveSlice,
        counter: counterSlice
    }
});