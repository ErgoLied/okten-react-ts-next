import {FC} from "react";
import {IUserModel} from "../../models/IUserModel";
import {useLocation, useNavigate} from "react-router-dom";

type IProps = {
    user: IUserModel;
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            {user.id} - {user.name}
            {location.pathname.startsWith('/users') &&
                <button onClick={() => navigate(user.id.toString())}>posts</button>
            }
        </div>
    );
};

export default UserComponent;