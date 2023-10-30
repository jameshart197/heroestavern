import React from "react";
import styles from "./attributewheel.module.css"
import { modifierCalculator } from "../../helpers/modifier";

const AttributeWheel = ({ attributes, avatarUrl }) => {
    const attributesArray = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
    const avatar = {'--avatar-url':`url(${avatarUrl})`};
    return (
        <section className={styles.attributeWheel} style={avatar}>
            <ul>
                {attributesArray.map(aName=>{
                    const a = attributes.find(attr=>(attr.attribute.name.toLowerCase()===aName))
                    return (
                    <li data-score={a.score} data-mod={modifierCalculator(a, 0)}>{a.attribute.shortname}</li>
                )})}
            </ul>
        </section>
    )
}

export default AttributeWheel