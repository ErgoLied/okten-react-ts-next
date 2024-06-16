import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterType = {
    value: number;
}

const initialState: CounterType = {value: 0}

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {           // this is actually actions... i guess(?)
        // here is functions to manipulate state

        increment: (state, action:PayloadAction<number>) => {
            state.value = state.value + action.payload
        },
        decrement: (state, action:PayloadAction<number>) => {
            state.value = state.value - action.payload
        },
        reset: (state) => {
            state.value = initialState.value
        }
    }
});

export const {
    increment,
    decrement,
    reset
} = counterSlice.actions;