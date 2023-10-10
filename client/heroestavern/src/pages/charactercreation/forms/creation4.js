import React, { useState } from "react";
import styles from "../charactercreation.module.css";

const CreationForm4 = () => {
  return (
    <form action="post" className={styles.descriptionForm}>
      <div>
        <label for="charnameinput">Allies:</label>
        <textarea  className={styles.Textbox}
          rows="4"
          cols="60"
          name="text"
          placeholder="Any allies you might have, such as party members or friends"
        ></textarea>
      </div>
      <div>
        <label for="charnameinput">Enemies:</label>
        <textarea  className={styles.Textbox}
          rows="4"
          cols="60"
          name="text"
          placeholder="Any enemies you might have, such as past encounters or leaders of enemy organizations"
        ></textarea>
      </div>
      <div>
        <label for="charnameinput">Factions and Organizations:</label>
        <textarea  className={styles.Textbox}
          rows="4"
          cols="60"
          name="text"
          placeholder="Any organizations you may be affiliated with, such as a guild or political party"
        ></textarea>
      </div>
      <div>
        <label for="charnameinput">Backstory:</label>
        <textarea  className={styles.Textbox}
          rows="4"
          cols="60"
          name="text"
          placeholder="The story of how you came to be the way you are"
        ></textarea>
      </div>
      <div>
        <label for="charnameinput">Other Notes:</label>
        <textarea  className={styles.Textbox}
          rows="4"
          cols="60"
          name="text"
          placeholder="Any other notes on your character such as likes, dislikes, habits and behavioural patterns"
        ></textarea>
      </div>
      <div id={styles.SubmitInput}>
        <input type="submit" className={styles.submitButton}/>
      </div>
    </form>
  );
};

export default CreationForm4;
