import {FC} from "react";
import {ICommentModel} from "../../models/ICommentModel";
import CommentComponent from "../Comment/CommentComponent";

type IProps = {
    comments: ICommentModel[];
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;