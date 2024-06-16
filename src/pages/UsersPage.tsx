import {useAppDispatch} from "../redux/store";
import {useEffect} from "react";
import {userActions} from "../redux/slices/userSlice";
import UsersComponent from "../components/Users/UsersComponent";

const UsersPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;