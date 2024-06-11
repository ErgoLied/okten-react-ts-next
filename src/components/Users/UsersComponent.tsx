import {useContextProvider} from "../../context/ContextProvider";
import UserComponent from "../User/UserComponent";

const UsersComponent = () => {
    const {userStore: {allUsers}} = useContextProvider();

    return (
        <div>
            {allUsers.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;