import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='users'>Users</NavLink>
            <NavLink to='posts'>Posts</NavLink>
            <NavLink to='comments'>Comments</NavLink>
        </div>
    );
};

export default HeaderComponent;