import CommentsComponent from "../components/Comments/CommentsComponent";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICommentModel} from "../models/ICommentModel";
import {apiService} from "../services/api.service";

const CommentsOfPostPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if (id) {
            apiService.getCommentsOfPost(id.toString()).then(({data}) => setComments(data));
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