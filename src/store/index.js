import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice.js'
import postReducer from './postSlice.js'
const store = configureStore({
    reducer: {
        post: postReducer,
        user: userReducer
    }
})

export default store