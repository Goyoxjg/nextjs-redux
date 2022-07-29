import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import config from "../config";

export const usersSlices = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        value: [],
        error: ''
    },
    reducers: {
        loading: state => {
            state.loading = true;
        },
        setUsers: (state, action) => {
            state.value = [...action.payload]
            state.loading = false
        },
        setError: (state, action) => {
            state.value = [...action.payload]
            state.loading = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { loading, setUsers, setError } = usersSlices.actions

export default usersSlices.reducer

// Thunk function
export const fetchTodos = () => async (dispatch) => {
    dispatch(loading())
    try {
        const response = await axios.get(config.baseUrl + 'users')
        dispatch(setUsers(response.data))
    }
    catch (e) {
        dispatch(setError(e.message))
    }
}
