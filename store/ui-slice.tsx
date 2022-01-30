import {createSlice} from '@reduxjs/toolkit';

const initialState = {isLoading:false};

const uiSlice = createSlice({
    name:'ui',
    initialState: initialState,
    reducers:{
        showLoading:(state)=>{
            state.isLoading= true;
        },
        stopLoading: (state)=>{
            state.isLoading= false;
        }
    },
})

export const uiActions = uiSlice.actions;
export default uiSlice;