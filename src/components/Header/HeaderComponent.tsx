import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <ul>
            <li><Link to={'users'}>users</Link></li>
            <li><Link to={'posts'}>posts</Link></li>
            <li><Link to={'comments'}>comments</Link></li>
            <li><Link to={'usersPosts'}>posts of users</Link></li>
            <li><Link to={'postsComments'}>comments of posts</Link></li>
        </ul>
    );
};

export default HeaderComponent;