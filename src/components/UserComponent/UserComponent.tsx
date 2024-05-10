import {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {WithUserDetails} from "../../highOrderComponent/withUserDetails";

type IProps = {
    user: IUserModel;
    details: (userEmail: string, userPhone: string) => void;
}
const UserComponent: FC<IProps> = ({user, details}) => {

    return (
        <div>
            <p>
                {user.id} - {user.firstName} {user.lastName} - age: {user.age}
                <button onClick={() => details(user.email, user.phone)}>show details</button>
            </p>
        </div>
    );
};

export default WithUserDetails(UserComponent);