import {FC} from "react";
import {ICommentModel} from "../../models/ICommentModel";

type IProps = {
    comment: ICommentModel;
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            {comment.id} - {comment.name}
        </div>
    );
};

export default CommentComponent;