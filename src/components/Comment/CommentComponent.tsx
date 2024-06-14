import {FC} from "react";
import {ICommentModel} from "../../models/ICommentModel";

interface IProps {
    comment: ICommentModel;
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            <p>{comment.id} - {comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;