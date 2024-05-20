import {FC} from "react";
import {IPostModel} from "../../models/IPostModel";

type IProps ={
    post: IPostModel;
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            {post.id} - {post.title}
        </div>
    );
};

export default PostComponent;