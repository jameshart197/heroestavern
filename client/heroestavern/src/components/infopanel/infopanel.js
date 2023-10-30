import React from "react";
import styles from "./infopanel.module.css";

const Infopanel = ( {character} ) => {
  return (
    <div className={styles.topbar}>
        <div>
            <div className={styles.label}>Name</div>
        </div>
        <div>
            <div className={styles.label}>Race</div>
        </div>
        <div>
            <div className={styles.label}>Class</div>
        </div>
        <div>
            <div className={styles.label}>Level</div>
        </div>
        <div>
            <div className={styles.label}>Inspiration</div>
        </div>
        <div>
            <div className={styles.label}>HP</div>
        </div>
        <div className={styles.response}>{character.character_name}</div>
        <div className={styles.response}>{character.subrace.name}</div>
        <div className={styles.response}>
          {character.levels.map(
            (l, idx)=>l.char_class.name + " - " 
              + character.subclass.find(sc=>sc.subclass.parent_class===l.char_class.id).subclass.name 
                + ((idx+1) < character.levels.length?" / ":""))
          }
        </div>
        <div className={styles.response}>
          {character.levels.reduce((a,b)=>a+b.level, 0)}
        </div>
        <div className={styles.response}><input type="checkbox" id="Inspiration" name="Inspiration" checked={character.inspiration} />
        <label htmlFor="Inspiration"></label></div>
        <div className={styles.hp}>{character.hit_points} / {character.hit_points}</div>
      </div>
  );
};

export default Infopanel;
