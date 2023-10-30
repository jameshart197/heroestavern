import React from "react";
import styles from "./errormessage.module.css";

const ErrorMessage = ( {errors, field, errorlevel} ) => {
  return (
    <div className={styles[errorlevel]}>
      {errors[field]?.map((message, idx) => (
        <span key={idx}>{message}</span>
      ))}
    </div>
  );
};

export default ErrorMessage;
