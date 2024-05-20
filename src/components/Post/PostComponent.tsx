import {FC} from "react";
import {IPostModel} from "../../models/IPostModel";
import {useLocation, useNavigate} from "react-router-dom";

type IProps = {
    post: IPostModel;
}

const PostComponent: FC<IProps> = ({post}) => {
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <div>
            {post.id} - {post.title}
            {!location.pathname.startsWith('/users') &&
                <button onClick={() => navigate(post.id.toString())}>comments</button>
            }
        </div>
    );
};

export default PostComponent;