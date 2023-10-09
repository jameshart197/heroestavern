import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./mycharsheets.module.css";
import SkillRow from "../../components/skillrow/skillrow";
import Character from "./dax.json";
import Skills from "./skills.json";
import Attributes from "./attributes.json";
import SavingThrowRow from "../../components/savingthrowsrows/savingthrowsrows";
import CharAttributes from "../../components/charattributes/charattributes";
import AttributeWheel from "../../components/attributewheel/attributewheel";
import { proficiencyBonus, skillProfLevel } from "../../helpers/modifier";
import Infopanel from "../../components/infopanel/infopanel";

const MyCharSheets = () => {
  const profBonus = proficiencyBonus(
    Character.levels.map((l) => l.level).reduce((a, b) => a + b, 0)
  );
  return (
    <>
      <Infopanel></Infopanel>
      <div className={styles.Pagecontainer}>
        <div className={styles.Leftpanel}>
          <div>
            <h3>Saving Throws</h3>
            <ul className={styles.SavingThrows}>
              {Attributes.map((attribute, idx) =>
                idx !== 0 ? (
                  <SavingThrowRow
                    attribute={Character.attributes.find(
                      (a) => a.attribute.name === attribute.name
                    )}
                    isProficient={
                      Character.saving_throws.find(
                        (st) => st.attribute.name === attribute.name
                      ) !== undefined
                    }
                    proficiencyBonus={profBonus}
                  ></SavingThrowRow>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <hr></hr>
          <div>
            <ul className={styles.Passives}>
              <li>
                Passive Perception: <div className={styles.Scorebox}><div className={styles.Scorecircle}>13</div></div>
              </li>
              <li>
                Passive Investigation: <div className={styles.Scorebox}><div className={styles.Scorecircle}>14</div></div>
              </li>
              <li>
                Passive Insight: <div className={styles.Scorebox}><div className={styles.Scorecircle}>18</div></div>
              </li>
            </ul>
          </div>
          <hr></hr>
          <div>
            <ul className={styles.Description}>
              <li>
                <strong>Faith</strong>
              </li>
              <li>Cyrollallee</li>
              <li>
                <strong>Age</strong> 
              </li>
              <li>32</li>
              <li>
                <strong>Height</strong>
              </li>
              <li>3'1</li>
              <li>
                <strong>Weight</strong>
              </li>
              <li>42 lbs</li>
              <li>
                <strong>Alignment</strong>
              </li>
              <li>Chaotic Good</li>
            </ul>
            <hr></hr>
            <h4>Background</h4>
            <h5>Storyteller</h5>
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
          </div>
        </div>
        <div className={styles.Centrepanel}>
          <ul>
            {Skills.map((skill, idx) =>
              idx !== 0 ? (
                <SkillRow
                  skill={skill}
                  attribute={Character.attributes.find(
                    (a) => a.attribute.name === skill.attribute
                  )}
                  proficiency={{
                    level: skillProfLevel(skill, Character),
                    bonus: profBonus,
                  }}
                ></SkillRow>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className={styles.Rightpanel}>
          <div className={styles.TRSection}>
            <div className={styles.Scorename}>Initiative:<div className={styles.Scorecircle}>+5</div></div>
            <div className={styles.Scorename}>Proficiency Bonus:<div className={styles.Scorecircle}>+3</div></div>
          </div>
          <div className={styles.attributewheelcontainer}>
            <AttributeWheel attributes={Character.attributes}></AttributeWheel>
          </div>
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
