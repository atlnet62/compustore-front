import { Routes, Route } from "react-router-dom";
import HOC from './../Helpers/HOC.jsx';

import Home from "../Components/Pages/Home";
import Store from "../Components/Pages/Store";
import Cart from "../Components/Pages/Cart/index.jsx";

import Error from "../Components/Pages/Error";

import Entry from "../Components/Pages/Entry/Index";
import Profile from "../Components/Pages/Entry/Profile";
import Signup from "../Components/Pages/Entry/Signup";
import Signout from "../Components/Pages/Entry/Signout";

import Admin from "../Components/Pages/Admin/Product/Index";
import Form from "../Components/Pages/Admin/Product/Form";

function Router() {

    return (
        <Routes>
            <Route index path="/" element={<HOC child={Home} />} />
            <Route path="store" element={<HOC child={Store} />}/>
            <Route path="cart" element={<HOC child={Cart} />} />

            <Route path="entry" element={<Entry />}>
                <Route path="signup" element={<Signup />} />
                <Route path="profile" element={<HOC child={Profile} isAuthRequired={true}/>} />
                <Route path="signout" element={<HOC child={Signout} isAuthRequired={true}/>} />
            </Route>

            <Route path="admin" element={<HOC child={Admin} isAuthRequired={true}/>} >
                <Route path="product/add" element={<HOC child={Form} formType={'add'} isAuthRequired={true}/>} />
            </Route>


            <Route path="*" element={<Error message={"404 : Page not found !"} />} />
        </Routes>
    )
}

export default Router;