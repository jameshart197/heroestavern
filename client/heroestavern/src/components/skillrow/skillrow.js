import React from "react";
import styles from "../../pages/mycharsheets/mycharsheets.module.css";
import ModifierBox from "../modifierbox/modifierbox";

const SkillRow = ({ skill, attribute, proficiency }) => {
  const prof = 
    proficiency.level===1?"Expertise":
    proficiency.level===2?"Half-Proficiency":
    "Proficient";

  return (
    <li className={styles.Skills}>
      {skill.name}: 
      <ModifierBox attribute={attribute} proficiencyLevel={proficiency.level} proficiencyBonus={proficiency.bonus}></ModifierBox>
      <div>
        <input type="checkbox" id="{skillName}{proficiencyLevel}" checked={proficiency.level!==undefined}/>
        <label for="{skillName}{proficiencyLevel}">{prof}</label>
      </div>
    </li>
  );
};

export default SkillRow;

