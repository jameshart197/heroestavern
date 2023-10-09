import React from "react";
import styles from "./initiative.module.css";
import { modifierCalculator } from "../../helpers/modifier";

const Initiative = ({ attribute, profBonus }) => {
  return (
    <div className={styles.Scorename}>
      Initiative:<div className={styles.Scorecircle}>
        {modifierCalculator(attribute, 0)+profBonus}
    </div>
    </div>
  );
};

export default Initiative;
