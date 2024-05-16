import {useEffect, useState} from "react";
import {IUserModel} from "../../models/IUserModel";
import {apiService} from "../../services/api.service";
import {IPostModel} from "../../models/IPostModel";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        apiService.getAllPosts().then(({data}) => setPosts(data));
    }, []);

    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.id} - {post.title}</div>)}
        </div>
    );
};

export default PostsComponent;