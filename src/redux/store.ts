import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {counterSlice} from "./slices/counterSlice";

export const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer    // reducer here NOT action -- it's thing to connect with init state
    }
});

// for good typification need to make it... more automatically (?)
// so that's why need to create CUSTOM HOOKS for Selector (state) & Dispatch (actions)
//      perhaps it must be in different file ;_; (and store also T_T)

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<RootState>();
// here up: RootState describes type of every slice of store

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();