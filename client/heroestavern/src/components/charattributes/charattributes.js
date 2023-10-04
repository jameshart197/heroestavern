import React from "react";
import styles from "../../pages/mycharsheets/mycharsheets.module.css";

const CharAttributes = ({ attributeName, score }) => {
  return (
    <li>
        {attributeName}: <div className={styles.Scorebox}>{score}</div>
    </li>
  );
};

export default CharAttributes;
