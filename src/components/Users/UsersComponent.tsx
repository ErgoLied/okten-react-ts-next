import {useEffect, useState} from "react";

import {IUserModel} from "../../models/IUserModel";
import UserComponent from "../User/UserComponent";
import {userService} from "../../services/user.api.service";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;