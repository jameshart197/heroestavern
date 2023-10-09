import React from "react";
import styles from "./scorebox.module.css";

const Scorebox = ({value, addPlus}) => {
    return (
      <div className={styles.Scorecircle}>{addPlus && (value>=0)?"+":""}{value}</div>
    );
  }

export default Scorebox