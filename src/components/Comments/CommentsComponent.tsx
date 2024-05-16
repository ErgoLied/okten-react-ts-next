import {useEffect, useState} from "react";
import {apiService} from "../../services/api.service";
import {ICommentModel} from "../../models/ICommentModel";

const CommentsComponent = () => {

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        apiService.getAllComments().then(({data}) => setComments(data));
    }, []);

    return (
        <div>
            {comments.map(comment => <div key={comment.id}>{comment.id} - {comment.name}</div>)}
        </div>
    );
};

export default CommentsComponent;