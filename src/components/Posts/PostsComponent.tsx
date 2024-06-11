import {FC} from "react";
import {useContextProvider} from "../../context/ContextProvider";
import PostComponent from "../Post/PostComponent";

const PostsComponent: FC = () => {
    const {postStore: {allPosts}} = useContextProvider();
    return (
        <div>
            {allPosts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;