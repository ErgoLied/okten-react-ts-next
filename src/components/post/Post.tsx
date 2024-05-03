import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

import styles from './Post.module.css';

type IPropsType = { post: IPostModel };
const Post: FC<IPropsType> = ({post}) => {
    return (
        <div>
            <h2 className={styles.header}>
                <span>#{post.id}</span> {post.title}
            </h2>

            <div>
                {post.tags.map((tag, index) =>
                    <span className={styles.tag} key={index}>{tag}</span>
                )}
            </div>

            <p>{post.body}</p>

            <div className={styles.flex}>
                <div className={styles.reactions}></div>
                {post.reactions}
            </div>

            <hr/>


        </div>
    );
};

export default Post;