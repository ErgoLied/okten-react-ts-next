import UsersComponent from "../components/Users/UsersComponent";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div className={'flex'}>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;