import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HOC from "../../../helpers/HOC";
import Store from "./Store";


function Index() {
    const location = useLocation;
    return location().pathname !== "/store" ? (
        <Outlet />
    ) : (
        <>
            <HOC child={Store} />
        </>
    );
}

export default Index;
