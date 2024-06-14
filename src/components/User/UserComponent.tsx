import {FC} from "react";
import {IUserModel} from "../../models/IUserModel";
import {useStore} from "../../zustand/StoreProvider";

interface IProps {
    user: IUserModel;
}

const UserComponent: FC<IProps> = ({user}) => {
    const {userStore: {setFavouriteUser}} = useStore();

    return (
        <div>
            {user.id} - {user.name}
            <button onClick={() => setFavouriteUser(user)}>*</button>
        </div>
    );
};

export default UserComponent;