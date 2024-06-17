import {useAppSelector} from "../../redux/store";
import UserComponent from "../User/UserComponent";

const UsersComponent = () => {
    const {users, isLoaded, error} = useAppSelector(state => state.userSlice);

    return (
        <div>
            {
                error
                    ? <div>{error}</div>
                    : isLoaded
                        ? users.map(user => <UserComponent key={user.id} user={user}/>)
                        : <h2>loading</h2>
            }
        </div>
    );
};

export default UsersComponent;