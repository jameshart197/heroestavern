import React from "react";
import styles from "./nochars.module.css";
import { NavLink } from "react-router-dom";

const NoChars = () => {
    return (
        <container className={styles.nocharsContainer}>
            <h2>You seem to have no characters</h2>
            <NavLink to={"/charactercreation/"}>
                <button className={styles.submitButton}>Create New Character</button>
            </NavLink>
        </container>
    );
};

export default NoChars;
