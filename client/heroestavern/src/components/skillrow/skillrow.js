import React from "react";
import styles from "../../pages/mycharsheets/mycharsheets.module.css";

const SkillRow = ({skillName, modifier, proficiencyLevel, isProfChecked}) => {
  return (
    <li className={styles.Skills}>
      {skillName}: <div className={styles.Scorebox}>{modifier}</div>
      <div>
        <input type="checkbox" id="{skillName}{proficiencyLevel}" checked={isProfChecked}/>
        <label for="{skillName}{proficiencyLevel}">{proficiencyLevel}</label>
      </div>
    </li>
  );
};

export default SkillRow;