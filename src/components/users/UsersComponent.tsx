import React, {FC, useEffect, useState} from 'react';
import {getAllUsers} from "../../services/users.api.service";
import {IUserModel} from "../../models/IUserModel";

const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data.users));
    }, []);

    return (
        <div>
            {
                users.map((user) =>
                    <div key={user.id}>
                        {user.id} - {user.firstName} {user.lastName}
                        <img src={user.image} alt=""/>
                    </div>
                )
            }
        </div>
    );
};

export default UsersComponent;