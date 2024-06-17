import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {postService} from "../../services/post.api.service";
import {AxiosError} from "axios";

type PostSliceType = {
    posts: IPost[];
    post: IPost | null;
    isLoaded: boolean;
}

const postInitState: PostSliceType = {
    posts: [],
    post: null,
    isLoaded: false
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAll();
            thunkAPI.dispatch(postActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const loadPostByID = createAsyncThunk(
    'postSlice/loadPostByID',
    async (id: string | undefined, thunkAPI) => {
        if (id) {
            try {
                const post = await postService.getByID(id);
                thunkAPI.dispatch(postActions.changeLoadState(true));
                return thunkAPI.fulfillWithValue(post);
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data);
            }
        }
        return null;
    }
);

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadPosts.fulfilled,
                (state, action) => {
                    state.posts = action.payload;
                }
            )
            .addCase(
                loadPostByID.fulfilled,
                (state, action) => {
                    state.post = action.payload;
                }
            )
            .addMatcher(
                isFulfilled(loadPosts, loadPostByID),
                (state, action) => {
                    state.isLoaded = true;
                })
            .addMatcher(
                isRejected(loadPosts, loadPostByID),
                (state, action) => {

                })
});

export const postActions = {...postSlice.actions, loadPosts, loadPostByID}