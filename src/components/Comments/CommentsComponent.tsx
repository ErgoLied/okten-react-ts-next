import {useContextProvider} from "../../context/ContextProvider";

const CommentsComponent = () => {
    const {commentStore: {allComments}} = useContextProvider();
    return (
        <div>
            {allComments.map(comment => <div key={comment.id}>{comment.id} {comment.body}</div>)}
        </div>
    );
};

export default CommentsComponent;