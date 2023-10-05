import React from "react";
import styles from "../../pages/mycharsheets/mycharsheets.module.css";
import ModifierBox from "../modifierbox/modifierbox";

const SavingThrowRow = ({ attribute, isProficient }) => {
  return (
    <li>
        {attribute.attribute.name}: 
        <ModifierBox attribute={attribute}></ModifierBox>
        <input type="checkbox" id={`${attribute.attribute.name}-savingthrow`} checked={isProficient}/>
        <label for={`${attribute.attribute.name}-savingthrow`}>Proficient</label>
    </li>
  );
};

export default SavingThrowRow;
