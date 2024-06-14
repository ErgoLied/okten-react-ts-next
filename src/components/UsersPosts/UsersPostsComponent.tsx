import {useStore} from "../../zustand/StoreProvider";
import {useEffect, useMemo, useState} from "react";
import {IUserPostsModel} from "../../models/IUserPostsModel";
import UserComponent from "../User/UserComponent";
import PostComponent from "../Post/PostComponent";

const UsersPostsComponent = () => {
    const {userStore: {allUsers}, postStore: {allPosts}} = useStore();
    const [usersPosts, setUsersPosts] = useState<IUserPostsModel[]>([]);

    const usersPostsArr = useMemo(() => {
        return allUsers.map(user => {
            return {...user, posts: allPosts.filter(post => post.userId === user.id)}
        })
    }, [allUsers, allPosts]);

    useEffect(() => {
        setUsersPosts(usersPostsArr);
    }, [usersPostsArr]);

    return (
        <>
            {
                usersPostsArr.map(user =>
                <div key={user.id}>
                    <UserComponent user={user}/>
                    <ul>
                        {user.posts.map(post =>
                            <li key={post.id}>
                                <PostComponent post={post}/>
                            </li>
                        )}
                    </ul>
                </div>
                )
            }
        </>
    );
};

export default UsersPostsComponent;