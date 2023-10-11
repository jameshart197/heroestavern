import React, { useState } from "react";
import styles from "../charactercreation.module.css";

const CreationForm4 = ({ characterState, setCharacterState }) => {
  const handleAlliesChange = (e) => {
    setCharacterState({...characterState, allies: e.currentTarget.value})
  }
  const handleEnemiesChange = (e) => {
    setCharacterState({...characterState, enemies: e.currentTarget.value})
  }
  const handleFactionsChange = (e) => {
    setCharacterState({...characterState, factions_and_orgs: e.currentTarget.value})
  }
  const handleBackstoryChange = (e) => {
    setCharacterState({...characterState, backstory: e.currentTarget.value})
  }
  const handleNotesChange = (e) => {
    setCharacterState({...characterState, notes: e.currentTarget.value})
  }
  return (
    <form action="post" className={styles.descriptionForm}>
      <div>
        <label for="charnameinput">Allies:</label>
        <textarea  className={styles.Textbox}
          rows="4"
          cols="60"
          name="text"
          placeholder="Any allies you might have, such as party members or friends"
          onChange={handleAlliesChange} value={characterState.allies}
        ></textarea>
      </div>
      <div>
        <label for="charnameinput">Enemies:</label>
        <textarea  className={styles.Textbox}
          rows="4"
          cols="60"
          name="text"
          placeholder="Any enemies you might have, such as past encounters or leaders of enemy organizations"
          onChange={handleEnemiesChange} value={characterState.enemies}
        ></textarea>
      </div>
      <div>
        <label for="charnameinput">Factions and Organizations:</label>
        <textarea  className={styles.Textbox}
          rows="4"
          cols="60"
          name="text"
          placeholder="Any organizations you may be affiliated with, such as a guild or political party"
          onChange={handleFactionsChange} value={characterState.factions_and_orgs}
        ></textarea>
      </div>
      <div>
        <label for="charnameinput">Backstory:</label>
        <textarea  className={styles.Textbox}
          rows="4"
          cols="60"
          name="text"
          placeholder="The story of how you came to be the way you are"
          onChange={handleBackstoryChange} value={characterState.backstory}
        ></textarea>
      </div>
      <div>
        <label for="charnameinput">Other Notes:</label>
        <textarea  className={styles.Textbox}
          rows="4"
          cols="60"
          name="text"
          placeholder="Any other notes on your character such as likes, dislikes, habits and behavioural patterns"
          onChange={handleNotesChange} value={characterState.notes}
        ></textarea>
      </div>
    </form>
  );
};

export default CreationForm4;
