import {useEffect, useMemo, useState} from "react";
import {IPostCommentsModel} from "../../models/IPostCommentsModel";
import {useStore} from "../../zustand/StoreProvider";
import UserComponent from "../User/UserComponent";
import PostComponent from "../Post/PostComponent";
import CommentComponent from "../Comment/CommentComponent";

const PostsCommentsComponent = () => {
    const {userStore: {allUsers}, postStore: {allPosts}, commentStore: {allComments}} = useStore();
    const [postsComments, setPostsComments] = useState<IPostCommentsModel[]>([]);

    const postsCommentsArr = useMemo(() => {
        return allPosts.map(post => {
            return {
                ...post,
                wroteBy: allUsers.find(user => user.id === post.userId) || {id: 0, name: 'Noname'},
                comments: allComments.filter(comment => comment.postId === post.id)
            }
        });
    }, [allUsers, allPosts, allComments]);

    useEffect(() => {
        setPostsComments(postsCommentsArr)
    }, [postsComments]);

    return (
        <>
            {postsComments.map(post =>
                <div key={post.id}>
                    <UserComponent user={post.wroteBy}/>
                    <PostComponent post={post}/>

                    <ul>
                        {post.comments.map(comment =>
                            <li key={comment.id}>
                                <CommentComponent comment={comment}/>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </>
    );
};

export default PostsCommentsComponent;