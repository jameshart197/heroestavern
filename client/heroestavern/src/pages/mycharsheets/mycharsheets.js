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
import Passives from "../../components/passives/passives";
import Description from "../../components/description/description";
import Initiative from "../../components/initiative/initiative";
import Scorebox from "../../components/scorebox/scorebox";

const MyCharSheets = () => {
  const profBonus = proficiencyBonus(
    Character.levels.map((l) => l.level).reduce((a, b) => a + b, 0)
  );
  return (
    <>
      <Infopanel character={Character}></Infopanel>
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
          <Passives
            character={Character}
            profBonus={profBonus}
          ></Passives>
          <hr></hr>
          <Description character={Character}></Description>
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
            <Initiative
              dex={Character.attributes.find(a=>a.attribute.id===2)}
              profBonus={profBonus}
            ></Initiative>
            <div className={styles.Scorename}>
              Proficiency Bonus:
              <Scorebox value={profBonus} addPlus={true}></Scorebox>
            </div>
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
