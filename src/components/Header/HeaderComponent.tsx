import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}>Sign in</NavLink></li>
                {/*<li><NavLink to={'/registration'}>Sign up</NavLink></li>*/}
                <li><NavLink to={'cars'}>Cars</NavLink></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;