import React, {FC} from 'react';

import {IUserModel} from "../../models/IUserModel";
import styles from './User.module.css';

type IProps = { user: IUserModel } & { postsOfCurrentUser?: (userId: number) => void };

const User: FC<IProps> = ({user, postsOfCurrentUser}) => {
    const showPosts = () => {
        if (postsOfCurrentUser) {
            postsOfCurrentUser(user.id);
        }
    }

    return (
        <div className={styles.profile}>
            <div className={styles.flex}>
                <img className={styles.avatar} src={user.image} alt={user.username}/>
                <div>
                    <p><span>#{user.id}</span> {user.firstName} {user.lastName}</p>
                    <a href={'mailto:' + user.email}>{user.email}</a>
                </div>
            </div>
            <button onClick={showPosts}>show posts</button>
        </div>
    );
};

export default User;