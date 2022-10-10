import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faLock,
    faLockOpen,
    faCartArrowDown,
    faUser,
    faXmark,
    faHouseChimney,
    faStore,
    faMailBulk,
    faDashboard,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
    const { isLogged } = useSelector((state) => ({ ...state.user }));

    const [isActive, setIsActive] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    const handleClick = () => {
        setIsActive(!isActive);
        setOverlay(!overlay);
    };

    useEffect(() => {
        const handleResize = () => {
            setWidthScreen(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <>
            <header>
                {widthScreen < 1280 && (
                    <button id="menu-btn" onClick={handleClick}>
                        {<FontAwesomeIcon icon={isActive ? faXmark : faBars} />}
                        {widthScreen > 768 && " MENU"}{" "}
                    </button>
                )}
                <nav
                    className={`${
                        widthScreen < 1280
                            ? isActive
                                ? "menu-display"
                                : "menu-off"
                            : "menu-display"
                    }`}
                    onClick={handleClick}
                >
                    <Link to="/">
                        <FontAwesomeIcon icon={faHouseChimney} /> Home
                    </Link>
                    <Link to="/store">
                        <FontAwesomeIcon icon={faStore} /> Store
                    </Link>
                    <a href="mailto:admin@admin.fr">
                        <FontAwesomeIcon icon={faMailBulk} /> Contact
                    </a>

                    <Link to="/store/cart">
                        <FontAwesomeIcon icon={faCartArrowDown} /> Cart
                    </Link>

                    {!isLogged ? (
                        <Link to="entry">
                            <FontAwesomeIcon icon={faLockOpen} /> Sign in/up
                        </Link>
                    ) : (
                        <>
                            <Link to="entry/profile">
                                <FontAwesomeIcon icon={faUser} /> Profile
                            </Link>
                            <Link to="admin">
                                <FontAwesomeIcon icon={faDashboard} /> Admin
                            </Link>
                            <Link to="entry/signout">
                                <FontAwesomeIcon icon={faLock} /> Signout
                            </Link>
                        </>
                    )}
                </nav>

                <h1>
                    Compu'<span>store</span>
                </h1>
            </header>

            <div
                className={`${overlay ? "menu-overlay" : ""}`}
                onClick={handleClick}
            ></div>
        </>
    );
}

export default Header;
