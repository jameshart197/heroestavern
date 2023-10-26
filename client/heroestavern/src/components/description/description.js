import React from "react";
import styles from "./description.module.css";

const Description = ({ character }) => {
  return (
    <div>
      <ul className={styles.Description}>
        <li>
          <strong>Faith</strong>
        </li>
        <li>{character.faith || "-"}</li>
        <li>
          <strong>Age</strong>
        </li>
        <li>{character.age}</li>
        <li>
          <strong>Height</strong>
        </li>
        <li>{character.height}</li>
        <li>
          <strong>Weight</strong>
        </li>
        <li>{character.weight}</li>
        <li>
          <strong>Alignment</strong>
        </li>
        <li>{character.alignment.name}</li>
      </ul>
      <hr></hr>
      <h4>Background</h4>
      <h5>{character.background.name}</h5>
      <p>
        {character.background.full_description}
      </p>
      <h5>{character.background.feature_name}</h5>
      <p>
        {character.background.feature}
      </p>
    </div>
  );
};

export default Description;
