import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import Post from "../post/Post";

type IPropsType = { posts: IPostModel[] }
const Posts: FC<IPropsType> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;
