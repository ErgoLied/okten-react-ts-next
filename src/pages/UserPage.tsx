import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {useEffect} from "react";
import {userActions} from "../redux/slices/userSlice";
import UserByIDComponent from "../components/UserByID/UserByIDComponent";

const UserPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {user, isLoaded} = useAppSelector(state => state.userSlice);

    useEffect(() => {
        dispatch(userActions.loadUserByID(id));
    }, [id]);

    return (
        <div>
            {
                isLoaded
                    ? user && <UserByIDComponent user={user}/>
                    : <h2>loading</h2>
            }
        </div>
    );
};

export default UserPage;