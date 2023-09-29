import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div>
                logo
            </div>
            <div>
                createpost
            </div>
            <div>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/characters"}>My Character Sheets</NavLink></li>
                    <li><NavLink>Sign Out</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;