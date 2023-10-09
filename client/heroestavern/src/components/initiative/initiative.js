import React from "react";
import styles from "./initiative.module.css";
import { modifierCalculator } from "../../helpers/modifier";
import Scorebox from "../scorebox/scorebox";

const Initiative = ({ attribute, profBonus }) => {
  return (
    <div className={styles.Scorename}>
      Initiative:
      <Scorebox value={5}  addPlus={true}></Scorebox>
    </div>
  );
};

export default Initiative;

// attribute = dexterity. Dex=character.attributes.attribute.id[2]
// score = character.attributes.attribute.score where ID=2
// scorebox value should = {modifierCalculator(dex, 0) + profBonus}
