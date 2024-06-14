import {FC} from "react";
import {IUserModel} from "../../models/IUserModel";
import {useContextProvider} from "../../context/ContextProvider";

interface IProps {
    user: IUserModel;
}

const UserComponent: FC<IProps> = ({user}) => {
    const {userStore: {setFavouriteUser}} = useContextProvider();

    return (
        <div>
            {user.id} - {user.name}
            <button onClick={() => setFavouriteUser(user)}>*</button>
        </div>
    );
};

export default UserComponent;