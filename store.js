import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/counterSlice';
import usersReducer from './redux/usersSlices';
import todoReducer from './redux/todoSlice';
import profileReducer from './redux/profileSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        todo: todoReducer,
        profile: profileReducer
    }
})
