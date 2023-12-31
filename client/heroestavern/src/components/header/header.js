import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import { useCurrentUser, useCurrentUserContext } from "../../contexts/currentUserContext";
import { logoutUser } from "../../helpers/caching.service.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const location = useLocation();
    const loginState = useCurrentUser();
    const [showButton, setShowButton] = useState(true);
    const { setCurrentUser } = useCurrentUserContext();
    useEffect(() => {
        const inCharCreation = window.location.pathname.startsWith("/charactercreation");
        setShowButton(!inCharCreation);
    }, [location]);
    const handleLogoutClick = () => {
        logoutUser();
        setCurrentUser(undefined);
    };
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const handleHamburgerButtonClick = () => {
        if (hamburgerMenu.style.right == "-50%" || hamburgerMenu.style.right == "") {
            hamburgerMenu.style.right = 0;
        } else {
            hamburgerMenu.style.right = "-50%";
        }
    };
    return (
        <header>
            <NavLink to={"/"}>
                <div className={styles.logo}></div>
            </NavLink>
            <div className={styles.create}>
                {showButton ? (
                    <NavLink to={"/charactercreation/"}>
                        <button className={styles.submitButton}>Create New Character</button>
                    </NavLink>
                ) : (
                    ""
                )}
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    {loginState ? (
                        <li>
                            <NavLink onClick={handleLogoutClick} to={"/"}>
                                Log Out
                            </NavLink>
                        </li>
                    ) : (
                        <>
                            <li>
                                <NavLink to={"/login"}>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/signup"}>Sign Up</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
            <button className={styles.hamburgerButton} onClick={handleHamburgerButtonClick}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div id="hamburger-menu" className={styles.hamburgerMenu}>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    {loginState ? (
                        <li>
                            <NavLink onClick={handleLogoutClick} to={"/"}>
                                Log Out
                            </NavLink>
                        </li>
                    ) : (
                        <>
                            <li>
                                <NavLink to={"/login"}>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/signup"}>Sign Up</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header;
