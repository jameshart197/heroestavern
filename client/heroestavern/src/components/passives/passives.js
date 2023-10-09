import React from "react";
import styles from "./passives.module.css";

const Passives = ({ character }) => {
  return (
    <div>
      <ul className={styles.Passives}>
        <li>
          Passive Perception:{" "}
          <div>
            <div className={styles.Scorecircle}>13</div>
          </div>
        </li>
        <li>
          Passive Investigation:{" "}
          <div>
            <div className={styles.Scorecircle}>14</div>
          </div>
        </li>
        <li>
          Passive Insight:{" "}
          <div>
            <div className={styles.Scorecircle}>18</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Passives;
