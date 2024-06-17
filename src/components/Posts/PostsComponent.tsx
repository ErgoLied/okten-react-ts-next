import PostComponent from "../Post/PostComponent";
import {useAppSelector} from "../../redux/store";

const PostsComponent = () => {
    const {posts, isLoaded} = useAppSelector(state => state.postSlice);

    return (
        <div>
            {
                isLoaded
                    ? posts.map(post => <PostComponent key={post.id} post={post}/>)
                    : <h2>loading</h2>
            }

        </div>
    );
};

export default PostsComponent;