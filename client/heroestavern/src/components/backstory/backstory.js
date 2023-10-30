import React from "react";
import styles from "./backstory.module.css"

const Backstory = ({ character }) => {
  return (
      <div className={styles.backstoryContainer}>
          <h4>Backstory</h4>
          <p>{character.backstory}</p>
      </div>
  );
};

export default Backstory;
