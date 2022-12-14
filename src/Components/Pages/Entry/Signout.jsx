import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../../../store/slices/user.slice";

function SignOut() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // refecto en tablea en fin de projet
        localStorage.removeItem("uat");
        localStorage.removeItem("uuid");
        localStorage.removeItem("cart");

        dispatch(signout());
        navigate("/entry");
    }, []);

    return null;
}

export default SignOut;
