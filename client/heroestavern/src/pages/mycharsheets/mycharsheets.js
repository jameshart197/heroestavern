import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./mycharsheets.module.css";
import SkillRow from "../../components/skillrow/skillrow";
import Skills from "./skills.json";
import Attributes from "./attributes.json";
import SavingThrowRow from "../../components/savingthrowsrows/savingthrowsrows";
import AttributeWheel from "../../components/attributewheel/attributewheel";
import { proficiencyBonus, skillProfLevel } from "../../helpers/modifier";
import Infopanel from "../../components/infopanel/infopanel";
import Passives from "../../components/passives/passives";
import Description from "../../components/description/description";
import Initiative from "../../components/initiative/initiative";
import Scorebox from "../../components/scorebox/scorebox";
import Backstory from "../../components/backstory/backstory";

const MyCharSheets = () => {
  const Character = (useLocation()).state
  const profBonus = proficiencyBonus(
    Character.levels.map((l) => l.level).reduce((a, b) => a + b, 0)
  );
  return (
    <>
      <Infopanel character={Character}></Infopanel>
      <div className={styles.pageContainer}>
        <div className={styles.leftPanel}>
          <div>
            <h3>Saving Throws</h3>
            <ul className={styles.savingThrows}>
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
        <div className={styles.centrePanel}>
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
        <div className={styles.rightPanel}>
          <div className={styles.trSection}>
            <Initiative
              dex={Character.attributes.find(a=>a.attribute.id===2)}
              profBonus={profBonus}
            ></Initiative>
            <div className={styles.scorename}>
              Proficiency Bonus:
              <Scorebox value={profBonus} addPlus={true}></Scorebox>
            </div>
          </div>
          <div className={styles.attributewheelContainer}>
            <AttributeWheel attributes={Character.attributes} avatarUrl={Character.character_art}></AttributeWheel>
          </div>
            <Backstory character={Character}></Backstory>
        </div>
      </div>
    </>
  );
};

export default MyCharSheets;
