import CommentsComponent from "../components/Comments/CommentsComponent";
import {useEffect, useState} from "react";
import {ICommentModel} from "../models/ICommentModel";
import {apiService} from "../services/api.service";

const CommentsPage = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        apiService.getAllComments().then(({data}) => setComments(data));
    }, []);

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;