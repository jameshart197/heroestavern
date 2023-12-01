import React from "react";
import styles from "./passives.module.css";
import Scorebox from "../scorebox/scorebox";
import { modifierCalculator, skillProfLevel } from "../../helpers/modifier";

const Passives = ({ character, profBonus }) => {
    const wisdom = character.attributes.find((a) => a.attribute.id === 5);
    const intelligence = character.attributes.find((a) => a.attribute.id === 4);
    const perception = character.skills.find((s) => s.skill.name === "Perception");
    const investigation = character.skills.find((s) => s.skill.name === "Investigation");
    const insight = character.skills.find((s) => s.skill.name === "Insight");
    const perceptionLevel = perception ? skillProfLevel(perception, character) : undefined;
    const investigationLevel = investigation ? skillProfLevel(investigation, character) : undefined;
    const insightLevel = insight ? skillProfLevel(insight, character) : undefined;
    const perceptionMultiplier = perceptionLevel === 0 ? 1 : perceptionLevel === 1 ? 2 : perceptionLevel === 2 ? 0.5 : 0;
    const investigationMultiplier = investigationLevel === 0 ? 1 : investigationLevel === 1 ? 2 : investigationLevel === 2 ? 0.5 : 0;
    const insightMultiplier = insightLevel === 0 ? 1 : insightLevel === 1 ? 2 : insightLevel === 2 ? 0.5 : 0;
    return (
        <div className={styles.passives}>
            Passive Perception:{" "}
            <div>
                <Scorebox value={+modifierCalculator(wisdom, profBonus * perceptionMultiplier) + 10}></Scorebox>
            </div>
            Passive Investigation:{" "}
            <div>
                <Scorebox value={+modifierCalculator(intelligence, profBonus * investigationMultiplier) + 10}></Scorebox>
            </div>
            Passive Insight:{" "}
            <div>
                <Scorebox value={+modifierCalculator(wisdom, profBonus * insightMultiplier) + 10}></Scorebox>
            </div>
        </div>
    );
};

export default Passives;
