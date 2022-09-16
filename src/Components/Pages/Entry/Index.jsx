import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Form from "./Form";

function Entry() {
    const location = useLocation;
    return (
        location().pathname !== "/entry" ?                 
        <Outlet />
        : 
        <>
            <Form formType={"signin"}/>
        </>

    );
}

export default Entry;
