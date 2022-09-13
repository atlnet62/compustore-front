import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home";
import Store from "../Components/Pages/Store";
import NotFound from "../Components/Pages/NotFound";
import HOC from './../Helpers/HOC.jsx';
import Entry from "../Components/Pages/Entry/Index";
import Dashboard from "../Components/Pages/Entry/Dashboard";
import Signup from "../Components/Pages/Entry/Signup";
import Signout from "../Components/Pages/Entry/Signout";


function Router() {
    return (
        <Routes>
            <Route index path="/" element={<HOC child={Home} />} />

            <Route path="store" element={<HOC child={Store} />}>
                {/* <Route path=":id" element={<HOC child={Detail} />} /> */}
            </Route>

            <Route path="entry" element={<Entry />}>
            <Route path="signup" element={<Signup />} />
                <Route path="dashboard" element={<HOC child={Dashboard} isAuthRequired={true}/>} />
                <Route path="signout" element={<HOC child={Signout} isAuthRequired={true}/>} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router;