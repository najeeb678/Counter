import { createSlice } from "@reduxjs/toolkit";

 const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        incrementNumber(state, action) {
            console.log(action);
            return state + 1;
            
        },
        decrementNumber(state, action) {
            console.log(action);
            return state - 1;
        },
        resetNumber(state, action) {
           return state= 0;
    
        }
    }
    })
export default countSlice.reducer;
export const {incrementNumber, decrementNumber, resetNumber } = countSlice.actions;
