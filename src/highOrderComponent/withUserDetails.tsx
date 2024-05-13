import {FC, useState} from 'react';
import {IUserModel} from "../models/IUserModel";

type IProps = {
    user: IUserModel;
}
export const withUserDetails = (Component: FC<IProps>) => {

    const WrapperComponent: FC<IProps> = ({user}) => {

        const [userDetails, setUserDetails] = useState(<></>);
        const details = () => {
            setUserDetails(<><p>email: {user.email}</p>
                    <p>phone: {user.phone}</p>
                    <hr/>
                </>
            )
        }

        return (
            <div>
                <Component user={user}/>
                <button onClick={details}>show details</button>
                {userDetails}
            </div>
        );
    }

    return WrapperComponent;
};
