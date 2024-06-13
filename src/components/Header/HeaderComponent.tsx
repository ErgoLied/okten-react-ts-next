import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <header>
            <ul>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
                <li><Link to={'usersPosts'}>usersPosts</Link></li>
                <li><Link to={'postsComments'}>postsComments</Link></li>
            </ul>
        </header>
    );
};

export default HeaderComponent;