import React from "react";
import styles from "../charactercreation.module.css";

const CreationForm2 = ({ characterState, setCharacterState }) => {
  const handleStrengthChange = (e) => {
    setCharacterState({ ...characterState, strength: e.currentTarget.value });
  };
  const handleDexterityChange = (e) => {
    setCharacterState({ ...characterState, dexterity: e.currentTarget.value });
  };
  const handleConstitutionChange = (e) => {
    setCharacterState({
      ...characterState,
      constitution: e.currentTarget.value,
    });
  };
  const handleIntelligenceChange = (e) => {
    setCharacterState({
      ...characterState,
      intelligence: e.currentTarget.value,
    });
  };
  const handleWisdomChange = (e) => {
    setCharacterState({ ...characterState, wisdom: e.currentTarget.value });
  };
  const handleCharismaChange = (e) => {
    setCharacterState({ ...characterState, charisma: e.currentTarget.value });
  };

  return (
    <form action="post" className={styles.creationForm}>
      <div className={styles.attributeInput}>
        <label for="charstrengthinput">Strength: </label>
        <input
          type="number"
          id="charstrengthinput"
          min="3"
          max="30"
          defaultValue={10}
          onChange={handleStrengthChange}
          value={characterState.strength}
        />
      </div>
      <div className={styles.attributeInput}>
        <label for="chardexterityinput">Dexterity: </label>
        <input
          type="number"
          id="chardexterityinput"
          min="3"
          max="30"
          defaultValue={10}
          onChange={handleDexterityChange}
          value={characterState.dexterity}
        />
      </div>
      <div className={styles.attributeInput}>
        <label for="charconstitutioninput">Constitution: </label>
        <input
          type="number"
          id="charconstitutioninput"
          min="3"
          max="30"
          defaultValue={10}
          onChange={handleConstitutionChange}
          value={characterState.constitution}
        />
      </div>
      <div className={styles.attributeInput}>
        <label for="charintelligenceinput">Intelligence: </label>
        <input
          type="number"
          id="charintelligenceinput"
          min="3"
          max="30"
          defaultValue={10}
          onChange={handleIntelligenceChange}
          value={characterState.intelligence}
        />
      </div>
      <div className={styles.attributeInput}>
        <label for="charwisdominput">Wisdom: </label>
        <input
          type="number"
          id="charwisdominput"
          min="3"
          max="30"
          defaultValue={10}
          onChange={handleWisdomChange}
          value={characterState.wisdom}
        />
      </div>
      <div className={styles.attributeInput}>
        <label for="charcharismainput">Charisma: </label>
        <input
          type="number"
          id="charcharismainput"
          min="3"
          max="30"
          defaultValue={10}
          onChange={handleCharismaChange}
          value={characterState.charisma}
        />
      </div>
    </form>
  );
};

export default CreationForm2;
