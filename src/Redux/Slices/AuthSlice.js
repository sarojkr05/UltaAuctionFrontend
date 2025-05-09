import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import { toast } from "react-toastify";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
    role: localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) || {}

}

export const createAccount = createAsyncThunk('/createAccount', async (data) => {
    console.log("Incoming data to the thunk", data);
    try {
        const response = await axiosInstance.post('/users', data)
        if(response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
        const apiResponse = await response;
        return apiResponse;
    } catch (error) {
        console.log(error)
    }
})

export const login = createAsyncThunk('/login', async (data) => {
    console.log("Incoming data to the thunk", data);
    try {
        const response = await axiosInstance.post('/auth/login', data)
        if(response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
        const apiResponse = await response;
        return apiResponse;
    } catch (error) {
        console.log(error)
    }
})

export const logout = createAsyncThunk('/logout', async () => {
    console.log("Incoming data to the thunk");
    try {
        const response = await axiosInstance.post('/auth/logout')
        if(response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
        const apiResponse = await response;
        return apiResponse;
    } catch (error) {
        console.log(error)
    }
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            // reducer wich will execute when the login thunk is fulfilled
            state.isLoggedIn = true,
            state.role = action?.payload?.data?.data?.userRole
            state.data = action?.payload?.data?.data?.userData

            localStorage.setItem('isLoggedIn', true),
            localStorage.setItem('role', action?.payload?.data?.data?.userRole)
            localStorage.setItem('data', JSON.stringify(action?.payload?.data?.data?.userData))
        })
        .addCase(logout.fulfilled, (state) => {
            // reducer wich will execute when the logout thunk is fulfilled
            localStorage.setItem('isLoggedIn', false)
            localStorage.setItem('role', '')
            localStorage.setItem('data', JSON.stringify({}))
            
            state.isLoggedIn = false
            state.role = ''
            state.data = {}

        })
    }
})

export default AuthSlice.reducer;