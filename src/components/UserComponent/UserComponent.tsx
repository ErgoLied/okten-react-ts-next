import {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {withUserDetails} from "../../highOrderComponent/withUserDetails";

type IProps = {
    user: IUserModel;
}
const UserComponent: FC<IProps> = ({user}) => {

    return (
        <div>
            <p>
                {user.id} - {user.firstName} {user.lastName} - age: {user.age}
            </p>
        </div>
    );
};

export default withUserDetails(UserComponent);