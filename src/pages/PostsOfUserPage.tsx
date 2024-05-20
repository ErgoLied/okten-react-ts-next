import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IPostModel} from "../models/IPostModel";
import {apiService} from "../services/api.service";
import PostsComponent from "../components/Posts/PostsComponent";

const PostsOfUserPage = () => {

    const {id} = useParams();
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (id) {
            apiService.getPostsOfUser(id).then(({data}) => setPosts(data))
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