import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import PostsComponent from "../components/Posts/PostsComponent";
import {IPostModel} from "../models/IPostModel";
import {postService} from "../services/post.api.service";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        postService.getAllPosts().then(({data}) => setPosts(data));
    }, []);

    return (
        <div className={'flex'}>
            <PostsComponent posts={posts}/>
            <div className={'fixed'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;