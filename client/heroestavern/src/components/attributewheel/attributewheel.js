import React from "react";
import styles from "./attributewheel.module.css"
import { modifierCalculator } from "../../helpers/modifier";

const AttributeWheel = ({attributes}) => {
    const attributesArray = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]
    return (
        <section className={styles.attributewheel}>
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