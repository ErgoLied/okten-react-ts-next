import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "./slices/postSlice";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
