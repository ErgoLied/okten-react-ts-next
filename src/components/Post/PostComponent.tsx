import {FC} from "react";
import {IPost} from "../../models/IPost";
import {useNavigate} from "react-router-dom";

interface IProps {
    post: IPost;
}
const PostComponent: FC<IProps> = ({post}) => {
    const navigate = useNavigate();

    return (
        <div>
            {post.id} - {post.title}
            <button onClick={() => navigate(post.id.toString())}>details</button>
        </div>
    );
};

export default PostComponent;