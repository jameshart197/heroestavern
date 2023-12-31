import React from "react";
import styles from "./initiative.module.css";
import { modifierCalculator } from "../../helpers/modifier";
import Scorebox from "../scorebox/scorebox";

const Initiative = ({ dex }) => {
  return (
    <div className={styles.scorename}>
      Initiative:
      <Scorebox value={modifierCalculator(dex, 0)}  addPlus={false}></Scorebox>
    </div>
  );
};

export default Initiative;

