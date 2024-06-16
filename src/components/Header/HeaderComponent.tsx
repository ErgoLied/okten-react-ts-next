import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <header>
            <Link to={'users'}>users</Link>
            <span> </span>
            <Link to={'posts'}>posts</Link>
        </header>
    );
};

export default HeaderComponent;