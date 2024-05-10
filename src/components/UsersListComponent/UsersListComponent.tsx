import {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {getAllUsers} from "../../services/users.api.service";
import UserComponent from "../UserComponent/UserComponent";

const UsersListComponent: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data.users));
    }, []);

    return (
        <div>
            {
                !!users && users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersListComponent;