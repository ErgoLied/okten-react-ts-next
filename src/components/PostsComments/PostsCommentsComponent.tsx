import {useContextProvider} from "../../context/ContextProvider";
import {useEffect, useMemo, useState} from "react";
import {IPostsCommentsModel} from "../../models/IPostsCommentsModel";
import UserComponent from "../User/UserComponent";
import PostComponent from "../Post/PostComponent";
import CommentComponent from "../Comment/CommentComponent";

const PostsCommentsComponent = () => {
    const {userStore: {allUsers}, postStore: {allPosts}, commentStore: {allComments}} = useContextProvider();
    const [postsComments, setPostsComments] = useState<IPostsCommentsModel[]>([]);

    const postsCommentsArr = useMemo(() => {
        return allPosts.map(post => {
            return {
                ...post,
                wroteBy: allUsers.find(user => user.id === post.userId) || {id: 0, name: 'Noname', email: 'no'},
                comments: allComments.filter(comment => comment.postId === post.id)
            };
        });
    }, [allUsers, allPosts, allComments]);

    useEffect(() => {
        setPostsComments(postsCommentsArr);
    }, [postsCommentsArr]);

    return (
        <div>
            {postsComments.map(postWithComment =>
                <>
                    <UserComponent key={postWithComment.wroteBy.id} user={postWithComment.wroteBy}/>
                    <PostComponent key={postWithComment.id} post={{
                        id: postWithComment.id,
                        userId: postWithComment.userId,
                        title: postWithComment.title,
                        body: postWithComment.body
                    }}/>
                    <ul>
                        {postWithComment.comments.map(comment =>
                            <li>
                                <CommentComponent key={comment.id} comment={comment}/>
                            </li>)}
                    </ul>
                </>
            )}
        </div>
    );
};

export default PostsCommentsComponent;