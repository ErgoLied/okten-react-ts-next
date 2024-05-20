import {useEffect, useState} from "react";
import {IUserModel} from "../../models/IUserModel";
import {apiService} from "../../services/api.service";
import UserComponent from "../User/UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        apiService.getAllUsers().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;