import PostByIDComponent from "../components/PostByID/PostByIDComponent";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {useEffect} from "react";
import {postActions} from "../redux/slices/postSlice";
import {useParams} from "react-router-dom";

const PostPage = () => {
    const {id} = useParams();
    const {post, isLoaded} = useAppSelector(state => state.postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPostByID(id));
    }, [id]);

    return (
        <div>
            {
                isLoaded
                    ? post && <PostByIDComponent post={post}/>
                    : <h2>loading</h2>
            }
        </div>
    );
};

export default PostPage;