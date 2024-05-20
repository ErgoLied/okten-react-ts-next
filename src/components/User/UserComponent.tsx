import {FC} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {IUserModel} from "../../models/IUserModel";

type IProps = {
    user: IUserModel;
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={'item'}>
            {user.id} - {user.name}
            {location.pathname.startsWith('/users') &&
                <button onClick={() => navigate(user.id.toString())}>posts</button>
            }
        </div>
    );
};

export default UserComponent;