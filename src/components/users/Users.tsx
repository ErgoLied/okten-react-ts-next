import React, {FC, useEffect, useState} from 'react';

import {IUserModel} from "../../models/IUserModel";
import {getAllUsers} from "../../services/users.api.service";
import User from "../user/User";

type IPropsType = { postsOfCurrentUser?: (userId: number) => void };

const Users: FC<IPropsType> = ({postsOfCurrentUser}) => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data.users));
    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} postsOfCurrentUser={postsOfCurrentUser}/>)
            }
        </div>
    );
};

export default Users;