import {Link} from "react-router-dom";
import {useStore} from "../../zustand/StoreProvider";
import FavouriteUserComponent from "../FavouriteUser/FavouriteUserComponent";

const HeaderComponent = () => {
    const {userStore: {favouriteUser}} = useStore();

    return (
        <header>
            <ul>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
                <li><Link to={'usersPosts'}>usersPosts</Link></li>
                <li><Link to={'postsComments'}>postsComments</Link></li>
            </ul>

            {favouriteUser && <FavouriteUserComponent user={favouriteUser}/>}

            <hr/>
        </header>
    );
};

export default HeaderComponent;