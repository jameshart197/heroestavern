import React from "react";
import styles from "../../pages/mycharsheets/mycharsheets.module.css";
import { modifierCalculator } from "../../helpers/modifier";


const ModifierBox = ({ attribute }) => {
  return (
    <div className={styles.Scorebox}>{modifierCalculator(attribute, 0)}</div>
  );
};

export default ModifierBox;
