import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async (_, { getState }) => {
        const token = getState().user.token
        const res = await axios.get(
            `${import.meta.env.VITE_API_ENDPOINT}/api/posts/allPosts`,
            { headers: { token } }
        )
        return res.data.posts
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState: {
        loading: false,
        data: [],
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.loading = false
                state.error = "Failed to fetch posts"
            })
    }
})

export default postSlice.reducer
