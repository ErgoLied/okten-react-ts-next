import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import CommentsComponent from "../components/Comments/CommentsComponent";
import {ICommentModel} from "../models/ICommentModel";
import {commentService} from "../services/comment.api.service";

const CommentsOfPostPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if (id) {
            commentService.getCommentsOfPost(id.toString()).then(({data}) => setComments(data));
        }
    }, [id]);

    return (
        <div>
            <h2>Comments:</h2>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsOfPostPage;