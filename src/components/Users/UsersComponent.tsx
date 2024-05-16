import {useEffect, useState} from "react";
import {IUserModel} from "../../models/IUserModel";
import {apiService} from "../../services/api.service";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        apiService.getAllUsers().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.id} - {user.name}</div>)}
        </div>
    );
};

export default UsersComponent;