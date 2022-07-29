import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from '../config'

export const fetchTodos = createAsyncThunk('todo/fetchTodo', async ({}, { rejectWithValue }) => {
    try {
        const response = await axios.get(config.baseUrl + 'todo')
        return response.data
    }
    catch (e) {
        return rejectWithValue(e)
    }
})

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        loading: false,
        value: [],
        error: ''
    },
    reducers: {
        addTodo: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        removeTodo: (state, action) => {
            state.value = [...state.value].filter((item) => item !== action.payload)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, state => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.value = [...action.payload]
                state.loading = false;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.message
            })
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
