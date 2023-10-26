import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { useCurrentUser, useCurrentUserContext } from "../../contexts/currentUserContext";
import { logoutUser } from "../../helpers/currentuser.api";

const Header = () => {
  const loginState = useCurrentUser();
  const { setCurrentUser } = useCurrentUserContext();
  const handleLogoutClick = () => {
    logoutUser();
    setCurrentUser(undefined);
  }
  return (
    <header>
      <div className={styles.logo}></div>
      <div className={styles.create}>
        <NavLink to={"/charactercreation/"}>
          <button className={styles.submitButton}>Create New Character</button>
        </NavLink>
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
    </header>
  );
};

export default Header;
