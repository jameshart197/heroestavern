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
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>My Character Sheets</NavLink></li>
                    <li><NavLink>Sign Out</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;