import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services/user.api.service";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[];
    user: IUser | null;
    isLoaded: boolean;
}

const userInitState: UserSliceType = {
    users: [],
    user: null,
    isLoaded: false
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {  // thunkAPI give results to actions in addCases
        try {
            const users = await userService.getAll();
            thunkAPI.dispatch(userActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const loadUserByID = createAsyncThunk(
    'userSlice/loadUserByID',
    async (id: string | undefined, thunkAPI) => {
        if (id) {
            try {
                const user = await userService.getByID(id);
                return thunkAPI.fulfillWithValue(user);
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data);
            }
        }
        return null;
    }
);

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadUsers.fulfilled,
                (state, action) => {
                    state.users = action.payload;
                })
            .addCase(
                loadUsers.rejected,
                (state, action) => {

                }
            )
            .addCase(
                loadUserByID.fulfilled,
                (state, action) => {
                    state.user = action.payload
                }
            )
            .addCase(
                loadUserByID.rejected,
                (state, action) => {

                }
            )
            .addMatcher(
                isFulfilled(loadUsers, loadUserByID),
                (state, action) => {
                    state.isLoaded = true;
                })
            .addMatcher(
                isRejected(loadUsers, loadUserByID),
                (state, action) => {

                }
            )
});

export const userActions = {...userSlice.actions, loadUsers, loadUserByID};