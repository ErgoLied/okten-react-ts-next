import {useContextProvider} from "../../context/ContextProvider";
import {useEffect, useMemo, useState} from "react";
import {IUsersPostsModel} from "../../models/IUsersPostsModel";
import UserComponent from "../User/UserComponent";
import PostComponent from "../Post/PostComponent";

const UsersPostsComponent = () => {
    const {userStore: {allUsers}, postStore: {allPosts}} = useContextProvider();
    const [usersPosts, setUsersPosts] = useState<IUsersPostsModel[]>([]);

    const usersPostsArr = useMemo(() => {
        return () => {
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)};
            })
        }
    }, [allUsers, allPosts]);

    useEffect(() => {
        setUsersPosts(usersPostsArr);
    }, [usersPostsArr]);

    return (
        <div>
            {usersPosts.map(user =>
                <>
                    <UserComponent key={user.id} user={user}/>
                    <ul>
                        {user.posts.map(post =>
                            <li><PostComponent key={post.id} post={post}/></li>
                        )}
                    </ul>
                </>)}
        </div>
    );
};

export default UsersPostsComponent;