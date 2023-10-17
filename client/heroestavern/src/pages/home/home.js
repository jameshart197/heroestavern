import React from "react";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../../contexts/currentUserContext";

const Home = () => {
    const user = useCurrentUser();
    return (
        <div>
            Home
            <br></br>
            <pre>
                {
                    JSON.stringify(user, null, 2)
                }
            </pre>
        </div>
    )
}

export default Home