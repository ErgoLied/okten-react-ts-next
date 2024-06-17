import PostsComponent from "../components/Posts/PostsComponent";
import {useAppDispatch} from "../redux/store";
import {useEffect} from "react";
import {postActions} from "../redux/slices/postSlice";

const PostsPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;