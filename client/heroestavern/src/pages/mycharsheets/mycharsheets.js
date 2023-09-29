import React from "react";
import { NavLink } from "react-router-dom";
import styles from './mycharsheets.module.css'

const MyCharSheets = () => {
  return (
    <>
      <div className={styles.Top}>
        <h2>This is a character sheet</h2>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default MyCharSheets;
