import React from "react";
import styles from "./attributewheel.module.css"
import { modifierCalculator } from "../../helpers/modifier";

const AttributeWheel = ({attributes}) => {
    return (
        <section className={styles.attributewheel}>
            <ul>
                {attributes.map(a=>(
                    <li data-score={a.score} data-mod={modifierCalculator(a, 0)}>{a.attribute.shortname}</li>
                ))}
            </ul>
        </section>
    )
}

export default AttributeWheel