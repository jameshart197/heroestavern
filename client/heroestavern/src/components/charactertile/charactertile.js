import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./charactertile.module.css";

const CharacterTile = ({ character }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(character);
        navigate(`/characters/${character.id}`, { state: character });
    };
    return (
        <button onClick={handleClick} className={styles.characterTile}>
            <h3>{character.character_name}</h3>
            <div className={styles.statContainer}>
                <div>{character.subrace.name}</div>
                <div>{character.subclass.map((s) => s.subclass.name).join(" / ")}  {character.levels.map((c) => c.char_class.name).join(" / ")}</div>
            </div>
                <div className={styles.level}>{character.levels.map((l) => l.level).join("")}</div>
        </button>
    );
};

export default CharacterTile;
