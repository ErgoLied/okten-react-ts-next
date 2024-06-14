import {IUserModel} from "../../models/IUserModel";
import {FC} from "react";

interface IProps {
    user: IUserModel;
}

const FavouriteUserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            favourite user: {user.name}
        </div>
    );
};

export default FavouriteUserComponent;