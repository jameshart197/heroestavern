import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css"

const Header = () => {
    return (
        <header>
                <div className={styles.logo}>
                </div>
                <div></div>
                <nav>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/characters"}>My Character Sheets</NavLink></li>
                        <li><NavLink>Sign Out</NavLink></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;