import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./mycharsheets.module.css";
import SkillRow from "../../components/skillrow/skillrow";
import Character from "./mycharsheets.json";
import Skills from "./skills.json";
import Attributes from "./attributes.json";
import SavingThrowRow from "../../components/savingthrowsrows/savingthrowsrows";

const MyCharSheets = () => {
  return (
    <>
      <div className={styles.Topbar}>
        <div>
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
      </div>
      <div className={styles.Pagecontainer}>
        <div className={styles.Leftpanel}>
          <div>
            <h3>Saving Throws</h3>
            <ul className={styles.SavingThrows}>
              {Attributes.map((attribute, idx) =>
                idx !== 0 ? (
                  <SavingThrowRow
                    attributeName={attribute.name}
                    modifier={"+3"}
                    isProficient={false}
                  ></SavingThrowRow>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div>
            <ul className={styles.Passives}>
              <li>
                Passive Perception: <div className={styles.Scorebox}>13</div>
              </li>
              <li>
                Passive Investigation: <div className={styles.Scorebox}>14</div>
              </li>
              <li>
                Passive Insight: <div className={styles.Scorebox}>18</div>
              </li>
            </ul>
          </div>
          <div>
            <h4>Background</h4>
            <p>
              From harsh deserts to frigid mountain peaks, you have traveled the
              land in search of myths and fables. Maybe you have settled in a
              bustling city, lingering in the taverns and collecting stories.
              Perhaps you have recorded your fill of second-hand tales and want
              to write your own. You value stories and the power they hold,
              using them to sway your audience to tears or laughter.
              Storytellers are nomadic in nature, moving from place to place to
              gather information. They value preserving knowledge and passing it
              on to those around them. Chronicler and performer all in one, they
              have a knack for enthralling their audience and getting people to
              talk to them.
            </p>
            <h5>Feature: A Friendly Face</h5>
            <p>
              Given your history of travel, you have an easy time of gaining
              trust from others. You can find a place to stay for the night, a
              group to keep watch with, or a traveling party without issue
              unless you have shown yourself to be dangerous or a threat. They
              also will not sell you out unless heavily threatened.
            </p>
            <ul className={styles.Description}>
              <li>
                <strong>Faith</strong> Cyrollallee
              </li>
              <li>
                <strong>Age</strong> 32
              </li>
              <li>
                <strong>Height</strong> 3'1
              </li>
              <li>
                <strong>Weight</strong> 42 lbs
              </li>
              <li>
                <strong>Alignment</strong> Chaotic Good
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.Centrepanel}>
          <ul>
            {Skills.map((skill, idx) =>
              idx !== 0 ? (
                <SkillRow
                  skillName={skill.name}
                  modifier={"+5"}
                  proficiencyLevel={"Proficient"}
                  isProfChecked={false}
                ></SkillRow>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className={styles.Rightpanel}>
          <div className={styles.Buttonpanel}>
            <button>Initiative: +5</button>
            <button>Profiency Bonus: +3</button>
          </div>
          <h3>This is a character box</h3>
          <div className={styles.Attributecircle}></div>
          <div>
            <ul className={styles.Selector}>
              <li>Actions</li>
              <li>Spells</li>
              <li>Feats</li>
              <li>Inventory</li>
              <li>Notes</li>
            </ul>
            <div>
              <p>
                The information here is contextual based on what is chosen from
                the tab selector above
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCharSheets;
