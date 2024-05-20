import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {IPostModel} from "../models/IPostModel";
import PostsComponent from "../components/Posts/PostsComponent";
import {postService} from "../services/post.api.service";

const PostsOfUserPage = () => {

    const {id} = useParams();
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (id) {
            postService.getPostsOfUser(id).then(({data}) => setPosts(data))
        }
    }, [id]);

    return (
        <div>
            <h2>Posts:</h2>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsOfUserPage;