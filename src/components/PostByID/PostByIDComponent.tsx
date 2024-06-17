import {FC} from "react";
import {IPost} from "../../models/IPost";

interface IProps {
    post: IPost;
}

const PostByIdComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <h3>{post.id} - {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostByIdComponent;