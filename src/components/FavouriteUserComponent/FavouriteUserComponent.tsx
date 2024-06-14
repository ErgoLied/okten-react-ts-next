import {FC} from "react";
import {IUserModel} from "../../models/IUserModel";

interface IProps {
    user: IUserModel | null;
}

const FavouriteUserComponent: FC<IProps> = ({user}) => {
    return (
        <>
            {user && <div>favourite user: {user.name}</div>}
            <hr/>
        </>
    );
};

export default FavouriteUserComponent;