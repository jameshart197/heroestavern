import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./charactertile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const CharacterTile = ({ character }) => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const menuClass = showMenu?styles.active:'';
    const handleClick = () => {
        console.log(character);
        navigate(`/characters/${character.id}`, { state: character });
    };
    const handleKebabClick = (e) => {
        setShowMenu(!showMenu);
        e.stopPropagation();
    }
    return (
        <button onClick={handleClick} className={styles.characterTile}>
            <button onClick={handleKebabClick} className={styles.kebabIcon}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
                <div className={menuClass}>
                    <ul>
                        <li>Edit Character</li>
                        <li>Delete Character</li>
                    </ul>
                </div>
            </button>
            <h3>{character.character_name}</h3>
            <div className={styles.characterSubrace}>{character.subrace.name}</div>
            <div className={styles.characterClass}>
                {character.subclass.map((s) => s.subclass.name).join(" / ")} {character.levels.map((c) => c.char_class.name).join(" / ")}
            </div>
            <div className={styles.level}>{character.levels.map((l) => l.level).join("")}</div>
        </button>
    );
};

export default CharacterTile;
