import {useStore} from "../../zustand/StoreProvider";
import UserComponent from "../User/UserComponent";

const UsersComponent = () => {
    const {userStore: {allUsers}} = useStore();

    return (
        <div>
            {allUsers.map(user=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;