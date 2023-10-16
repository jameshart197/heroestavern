import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css"

const Header = () => {
    return (
        <header>
                <div className={styles.logo}>
                </div>
                <div className={styles.create}><NavLink to={"/charactercreation/"}>
                    <button className={styles.submitButton}>Create New Character</button>
                    </NavLink></div>
                <nav>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/characters"}>My Character Sheets</NavLink></li>
                        <li><NavLink to={"/signup"}>Sign Up</NavLink></li>
                        <li><NavLink to={"/login"}>Login</NavLink></li>
                        <li><NavLink>Sign Out</NavLink></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;