import {useEffect, useState} from "react";

import CommentsComponent from "../components/Comments/CommentsComponent";
import {ICommentModel} from "../models/ICommentModel";
import {commentService} from "../services/comment.api.service";

const CommentsPage = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        commentService.getAllComments().then(({data}) => setComments(data));
    }, []);

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;