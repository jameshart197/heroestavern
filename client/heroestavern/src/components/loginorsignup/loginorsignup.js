import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./loginorsignup.module.css"

const LoginOrSignup = () => {
    return (
        <div className={styles.landingPage}>
            <h2>Oh dear. You are not currently logged in!</h2>
            <h3>To create new characters and view your list of characters, you must log in!</h3>
            <NavLink to={"/login"}>
                <button>Log In</button>
            </NavLink>
            <h3>If you do not have an account yet, you can create on below!</h3>
            <NavLink to={"/signup"}>
                <button>Sign Up</button>
            </NavLink>
        </div>
    );
};

export default LoginOrSignup
