import React from "react";
import styles from "./infopanel.module.css";

const Infopanel = () => {
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
        <div className={styles.Response}>Daxton 'Dax' Silvertongue</div>
        <div className={styles.Response}>Bard - College of Eloquence</div>
        <div className={styles.Response}>Lightfoot Halfling</div>
        <div className={styles.Response}>5</div>
        <div className={styles.Response}><input type="checkbox" id="Inspiration" name="Inspiration" checked />
        <label for="Inspiration"></label></div>
        <div className={styles.hp}>15 / 15</div>
      {/* <div>
        <h2>Daxton 'Dax' Silvertongue</h2>
      </div>
      <div>
        <h3>Bard - College of Eloquence</h3>
      </div>
      <div>
        <h3>Lightfoot Halfling</h3>
      </div>
      <div>
        <h3>Level: 5</h3>
      </div>
      <div>
        <input type="checkbox" id="Inspiration" name="Inspiration" checked />
        <label for="Inspiration">Inspiration</label>
      </div>
      <div>
        <div className={styles.hp}>
          <h3>HP: 15 / 15</h3>
        </div>
      </div> */}
    </div>
  );
};

export default Infopanel;
