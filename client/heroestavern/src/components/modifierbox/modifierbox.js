import React from "react";
import styles from "../../pages/mycharsheets/mycharsheets.module.css";

const ModifierCalculator = (attribute, profbonus) =>
  Math.floor((attribute.score - 10) / 2) + profbonus;

const ModifierBox = ({ attribute }) => {
  return (
    <div className={styles.Scorebox}>{ModifierCalculator(attribute, 0)}</div>
  );
};

export default ModifierBox;
