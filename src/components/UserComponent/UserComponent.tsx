import {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";

type IProps = {
    user: IUserModel;
}
const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <p>
                {user.id} - {user.firstName} {user.lastName} - age: {user.age}
                <button>show details</button>
            </p>
        </div>
    );
};

export default UserComponent;