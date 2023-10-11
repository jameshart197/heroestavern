import React, { useState } from "react";
import styles from "../charactercreation.module.css";

const CreationForm2 = () => {
  return (
    <form action="post" className={styles.creationForm}>
      <div className={styles.AttributeInput}>
        <label for="charstrengthinput">Strength: </label>
        <input
          type="number"
          id="charstrengthinput"
          min="3"
          max="30"
          defaultValue={10}
        />
      </div>
      <div className={styles.AttributeInput}>
        <label for="chardexterityinput">Dexterity: </label>
        <input
          type="number"
          id="chardexterityinput"
          min="3"
          max="30"
          defaultValue={10}
        />
      </div>
      <div className={styles.AttributeInput}>
        <label for="charconstitutioninput">Constitution: </label>
        <input
          type="number"
          id="charconstitutioninput"
          min="3"
          max="30"
          defaultValue={10}
        />
      </div>
      <div className={styles.AttributeInput}>
        <label for="charintelligenceinput">Intelligence: </label>
        <input
          type="number"
          id="charintelligenceinput"
          min="3"
          max="30"
          defaultValue={10}
        />
      </div>
      <div className={styles.AttributeInput}>
        <label for="charwisdominput">Wisdom: </label>
        <input
          type="number"
          id="charwisdominput"
          min="3"
          max="30"
          defaultValue={10}
        />
      </div>
      <div className={styles.AttributeInput}>
        <label for="charcharismainput">Charisma: </label>
        <input
          type="number"
          id="charcharismainput"
          min="3"
          max="30"
          defaultValue={10}
        />
      </div>
      {/* <div id={styles.SubmitInput}>
        <input type="submit" className={styles.submitButton} />
      </div> */}
    </form>
  );
};

export default CreationForm2;
