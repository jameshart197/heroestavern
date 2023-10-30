import React from "react";
import styles from "./modifierbox.module.css";
import { modifierCalculator } from "../../helpers/modifier";


const ModifierBox = ({ attribute, proficiencyLevel, proficiencyBonus }) => {
  const proflevel = 
    proficiencyLevel===0?proficiencyBonus:
    proficiencyLevel===1?proficiencyBonus*2:
    proficiencyLevel===2?Math.floor(proficiencyBonus/2):
    0;
  return (
    <div className={styles.scorebox}>{modifierCalculator(attribute, proflevel)}</div>
  );
};

export default ModifierBox;
