import React from "react";
import styles from "./passives.module.css";
import Scorebox from "../scorebox/scorebox";

const Passives = ({ character }) => {
  return (
    <div>
      <ul className={styles.Passives}>
        <li>
          Passive Perception:{" "}
          <div>
            <Scorebox value="13"></Scorebox>
          </div>
        </li>
        <li>
          Passive Investigation:{" "}
          <div>
            <Scorebox value="13"></Scorebox>
          </div>
        </li>
        <li>
          Passive Insight:{" "}
          <div>
            <Scorebox value="13"></Scorebox>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Passives;

// scorebox values should =  10 + modifiercalculator(attribute, proflevel) 
// where attribute= wisdom, intelligence, wisdom and 
// proflevel = character.skills.proficiencylevel in correlating skills (find skill.name === character.skills.name?)