import {useStore} from "../../zustand/StoreProvider";
import PostComponent from "../Post/PostComponent";

const PostsComponent = () => {
    const {postStore: {allPosts}} = useStore();

    return (
        <div>
            {allPosts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;