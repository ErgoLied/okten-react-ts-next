import {useEffect, useState} from "react";
import {apiService} from "../../services/api.service";
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../Post/PostComponent";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        apiService.getAllPosts().then(({data}) => setPosts(data));
    }, []);

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;