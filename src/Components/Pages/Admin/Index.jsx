import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HOC from "../../../helpers/HOC";
import Panel from "./Panel";

function Index() {
    const location = useLocation;
    return location().pathname !== "/admin" ? (
        <Outlet />
    ) : (
        <>
            <HOC child={Panel} />
        </>
    );
}

export default Index;
