import {FC} from "react";
import {IUser} from "../../models/IUser";

interface IProps {
    user: IUser;
}
const UserByIdComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <p>{user.id} - {user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserByIdComponent;