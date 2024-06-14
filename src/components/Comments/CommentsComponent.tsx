import {useStore} from "../../zustand/StoreProvider";
import CommentComponent from "../Comment/CommentComponent";

const CommentsComponent = () => {
    const {commentStore: {allComments}} = useStore();

    return (
        <div>
            {allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;