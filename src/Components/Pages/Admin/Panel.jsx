import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Elements/Button/Index";
import Error from "../../Pages/Error";

function Panel({userInfos}) {
    
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=> {
        const checkAdmin = () => {
            if (userInfos.role_id === 3) {
                setIsAdmin(!isAdmin);
            }
        } 
        checkAdmin();
        // eslint-disable-next-line
    }, [])

    return ((isAdmin) ?
        <main id="panel">
            <h2>ADMIN DASHBOARD</h2>

            <section id="product_panel">
                <h3>Products Panel</h3>
                <Button>
                    <Link to={"/admin/product/all"}>List</Link>
                </Button>
                <Button>
                    <Link to={"/admin/product/add"}>Add</Link>
                </Button>
            </section>

            <section id="category_panel">
                <h3>Category Panel</h3>
                <Button>
                    <Link to={"/admin/category/all"}>List</Link>
                </Button>
                <Button>
                    <Link to={"/admin/category/add"}>Add</Link>
                </Button>
            </section>

            <section id="user_panel">
                <h3>User Panel</h3>
                <Button>
                    <Link to={"/admin/user/all"}>List</Link>
                </Button>
                <Button>
                    <Link to={"/admin/user/add"}>Add</Link>
                </Button>
            </section>

            <section id="role_panel">
                <h3>Role Panel</h3>
                <Button>
                    <Link to={"/admin/role/all"}>List</Link>
                </Button>
                <Button>
                    <Link to={"/admin/role/add"}>Add</Link>
                </Button>
            </section>
            <div className="pagination">
                <Button>
                    <Link to={"/admin"}>prev page</Link>
                </Button>
                <Button>
                    <Link to={"/admin"}>next page</Link>
                </Button>
            </div>
        </main>
        : <Error message={"You are not allowed to access at this panel"} />
    );
}

export default Panel;
