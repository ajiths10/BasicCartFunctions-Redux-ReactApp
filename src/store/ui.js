import { createSlice } from "@reduxjs/toolkit";

const intialValues = { isLoading: false, isSuccess: false , isError: false }

const NotificationSlice = createSlice({
    name: 'Notification',
    initialState: intialValues,
    reducers:{
        setIsLoding(state,action){
            state.isLoading = action.payload;
        },
        setIsSuccess(state,action){
            state.isSuccess = action.payload;
        },
        setIsError(state,action){
            state.isError = action.payload
        }

    }
})

export const NotificationActions = NotificationSlice.actions

export default NotificationSlice.reducer