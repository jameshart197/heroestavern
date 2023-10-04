import React from "react";
import styles from "../../pages/mycharsheets/mycharsheets.module.css";

const SavingThrowRow = ({ attributeName, modifier, isProficient }) => {
  return (
    <li>
        {attributeName}: 
        <div className={styles.Scorebox}>{modifier}</div>
        <input type="checkbox" id="{attributeName}savingthrow" checked={isProficient}/>
        <label for="{attributeName}savingthrow">Proficient</label>
    </li>
  );
};

export default SavingThrowRow;
