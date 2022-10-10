import { Routes, Route } from "react-router-dom";
import HOC from "./../helpers/HOC.jsx";

import Home from "../Components/Pages/Home";
import Store from "../Components/Pages/Store/Index";
import Detail from "../Components/Pages/Store/Detail";
import Order from "../Components/Pages/Store/Order";

import Error from "../Components/Pages/Error";

import Entry from "../Components/Pages/Entry/Index";
import Profile from "../Components/Pages/Entry/Profile";
import Signup from "../Components/Pages/Entry/Signup";
import ValidateAccount from "../Components/Pages/Entry/ValidateAccount";
import Signout from "../Components/Pages/Entry/Signout";

import Admin from "../Components/Pages/Admin/Index";
import ProductList from "../Components/Pages/Admin/Product/List";
import ProductFormAdd from "../Components/Pages/Admin/Product/Form";
import CategoryList from "../Components/Pages/Admin/Category/List";

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />

            <Route path="store" element={<Store />}>
                <Route
                    path="detail/:productID"
                    element={<HOC child={Detail} />}
                />
                <Route path="cart" element={<HOC child={Order} />} />
            </Route>

            <Route path="entry" element={<Entry />}>
                <Route path="signup" element={<Signup />} />
                <Route
                    path="validateaccount/:uuid"
                    element={<ValidateAccount />}
                />
                <Route
                    path="profile"
                    element={<HOC child={Profile} isAuthRequired={true} />}
                />
                <Route
                    path="signout"
                    element={<HOC child={Signout} isAuthRequired={true} />}
                />
            </Route>

            <Route
                path="admin"
                element={<Admin isAdmin={true} isAuthRequired={true} />}
            >
                <Route
                    path="product/all"
                    element={
                        <HOC
                            child={ProductList}
                            isAdmin={true}
                            isAuthRequired={true}
                        />
                    }
                />
                <Route
                    path="product/add"
                    element={
                        <HOC
                            child={ProductFormAdd}
                            formType={"add"}
                            isAdmin={true}
                            isAuthRequired={true}
                        />
                    }
                />
                <Route
                    path="category/all"
                    element={
                        <HOC
                            child={CategoryList}
                            isAdmin={true}
                            isAuthRequired={true}
                        />
                    }
                />
            </Route>

            <Route
                path="*"
                element={<Error message={"404 : Page not found !"} />}
            />
        </Routes>
    );
}

export default Router;
