import PostsComponent from "../components/Posts/PostsComponent";
import {useEffect, useState} from "react";
import {IPostModel} from "../models/IPostModel";
import {apiService} from "../services/api.service";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        apiService.getAllPosts().then(({data}) => setPosts(data));
    }, []);

    return (
        <div className={'flex'}>
            <PostsComponent posts={posts}/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;