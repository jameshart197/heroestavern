import React from "react";
import styles from "./infopanel.module.css";

const Infopanel = ( {character} ) => {
  return (
    <div className={styles.Topbar}>
        <div>
            <div className={styles.Label}>Name</div>
        </div>
        <div>
            <div className={styles.Label}>Race</div>
        </div>
        <div>
            <div className={styles.Label}>Class</div>
        </div>
        <div>
            <div className={styles.Label}>Level</div>
        </div>
        <div>
            <div className={styles.Label}>Inspiration</div>
        </div>
        <div>
            <div className={styles.Label}>HP</div>
        </div>
        <div className={styles.Response}>{character.character_name}</div>
        <div className={styles.Response}>{character.subrace.name}</div>
        <div className={styles.Response}>
          {character.levels.map(
            (l, idx)=>l.char_class.name + " - " 
              + character.subclass.find(sc=>sc.subclass.parent_class===l.char_class.id).subclass.name 
                + ((idx+1) < character.levels.length?" / ":""))
          }
        </div>
        <div className={styles.Response}>
          {character.levels.reduce((a,b)=>a+b.level, 0)}
        </div>
        <div className={styles.Response}><input type="checkbox" id="Inspiration" name="Inspiration" checked={character.inspiration} />
        <label htmlFor="Inspiration"></label></div>
        <div className={styles.hp}>{character.hit_points} / {character.hit_points}</div>
      </div>
  );
};

export default Infopanel;
