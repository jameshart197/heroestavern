import React from "react";
import styles from "./infopanel.module.css";
import { NavLink } from "react-router-dom";

const Infopanel = ({ character }) => {
    return (
        <div className={styles.topbar}>
            <button className={styles.editCharButton}>
                <NavLink to="/charactercreation" state={character}>
                    Edit
                </NavLink>
            </button>
            <div>
                <div className={styles.label}>Name</div>
                <div className={styles.response}>{character.character_name}</div>
            </div>
            <div>
                <div className={styles.label}>Race</div>
                <div className={styles.response}>{character.subrace.name}</div>
            </div>
            <div>
                <div className={styles.label}>Class</div>
                <div className={styles.response}>
                    {character.levels.map(
                        (l, idx) =>
                            l.char_class.name +
                            " - " +
                            character.subclass.find((sc) => sc.subclass.parent_class === l.char_class.id).subclass.name +
                            (idx + 1 < character.levels.length ? " / " : "")
                    )}
                </div>
            </div>
            <div>
                <div className={styles.label}>Level</div>
                <div className={styles.response}>{character.levels.reduce((a, b) => a + b.level, 0)}</div>
            </div>
            <div>
                <div className={styles.label}>Inspiration</div>
                <div className={styles.response}>
                    <input type="checkbox" id="Inspiration" name="Inspiration" checked={character.inspiration} />
                    <label htmlFor="Inspiration"></label>
                </div>
            </div>
            <div>
                <div className={styles.label}>HP</div>
                <div className={styles.hp}>
                    {character.hit_points} / {character.hit_points}
                </div>
            </div>
        </div>
    );
};

export default Infopanel;
