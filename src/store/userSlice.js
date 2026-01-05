import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpUser = createAsyncThunk(
    "user/signup",
    async (userData) => {
        const res = await axios.post(
            `${import.meta.env.VITE_API_ENDPOINT}api/user/signup`,
            userData
        );
        return res.data;
    }
);

export const signInUser = createAsyncThunk(
    "user/login",
    async (userData) => {
        const res = await axios.post(
            `${import.meta.env.VITE_API_ENDPOINT}api/user/login`,
            userData
        );
        return res.data;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        token: null,
        username: null,
        error: null,
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.username = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.username = action.payload.username;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(signInUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.username = action.payload.username;
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

    },
});
export const { clearError, logout } = userSlice.actions;

export default userSlice.reducer;
