import {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

type IProps = {
    user: IUserModel;
}
export const withUserDetails = (Component: FC<IProps>) => {

    const WrapperComponent: FC<IProps> = ({user}) => {

        return (
            <div>
                <Component user={user}/>
                <p>email: {user.email}</p>
                <p>phone: {user.phone}</p>
                <hr/>
            </div>
        );
    }

    return WrapperComponent;
};
