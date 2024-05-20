import {useEffect, useState} from "react";
import {apiService} from "../../services/api.service";
import {ICommentModel} from "../../models/ICommentModel";
import CommentComponent from "../Comment/CommentComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        apiService.getAllComments().then(({data}) => setComments(data));
    }, []);

    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;