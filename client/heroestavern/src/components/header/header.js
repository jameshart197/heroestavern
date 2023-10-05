import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css"

const Header = () => {
    return (
        <header>
            <nav>
                <div className={styles.logo}>
                    logo
                </div>
                <div></div>
                <div>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/characters"}>My Character Sheets</NavLink></li>
                        <li><NavLink>Sign Out</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;