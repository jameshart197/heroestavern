import React from "react";
import styles from "./initiative.module.css";
import { modifierCalculator } from "../../helpers/modifier";
import Scorebox from "../scorebox/scorebox";

const Initiative = ({ dex, profBonus }) => {
  return (
    <div className={styles.Scorename}>
      Initiative:
      <Scorebox value={modifierCalculator(dex, 0)}  addPlus={false}></Scorebox>
    </div>
  );
};

export default Initiative;

