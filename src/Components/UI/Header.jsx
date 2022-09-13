import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";

function Header() {

    const { isLogged } = useSelector((state) => ({...state.user}));


    console.log(isLogged)
    return (
        <header>
            <h1>Compu'<span>store</span></h1>

            <div className="menu">
                <input type="checkbox" id="burger" />
                <label id="logo-burger" htmlFor="burger"></label>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/store">Store</Link>
                    <Link to="/cart">Cart</Link>
                    { !isLogged ? ( 
                    <Link to="entry">Sign in/up</Link>
                ) : (
                    <>
                        <Link to="entry/dashboard">Dashboard</Link>
                        <Link to="entry/signout">Signout</Link>
                    </>
                )}
                    <Link to="/contact">contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;