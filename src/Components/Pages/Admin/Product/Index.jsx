import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Error from "../../Error";
import List from './List';
import HOC from '../../../../Helpers/HOC'


function Admin({ userInfos }) {

    const location = useLocation;
    
    return (

        userInfos.role_id === 3 
        ?
            location().pathname !== "/admin" ?                 
            <Outlet />
            : 
            <>
                <HOC child={List} />
            </>

        :
        <>
            <Error message={"You are only a user, You can't access to this panel !"} />
        </>
    );
}

export default Admin;