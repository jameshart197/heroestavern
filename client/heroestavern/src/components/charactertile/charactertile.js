import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./charactertile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { deleteCharacter } from "../../helpers/api";
import { getToken, setCharList } from "../../helpers/caching.service.api";

const CharacterTile = ({ character, list }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [openRight, setOpenRight] = useState(false);
    const navigate = useNavigate();
    const menuClass = [showMenu?styles.active:'', openRight?styles.openRight:styles.openLeft].filter(m=>m).join(' ');
    const handleClick = () => {
        console.log(character);
        navigate(`/characters/${character.id}`, { state: character });
    };
    const handleKebabClick = (e) => {
        setShowMenu(!showMenu);
        if(e.currentTarget.getBoundingClientRect().x < 200) {
            setOpenRight(true);
        }
        else {
            setOpenRight(false)
        }
        e.stopPropagation();
    }
    const handleDeleteCharacterClick = async (e) => {
        const token = getToken();
        const pk = character.id;
        const response = await deleteCharacter(pk, token);
        if(response) {
            const [myCharacterList, setMyCharacterList] = list;
            setMyCharacterList(myCharacterList.filter(c=>c.id!==character.id));
            setCharList(myCharacterList.filter(c=>c.id!==character.id));
        }
    }
    return (
        <button onClick={handleClick} className={styles.characterTile}>
            <button onClick={handleKebabClick} className={styles.kebabIcon}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
                <div className={menuClass}>
                    <ul className={styles['grid-inner']}>
                        <li><NavLink to="/charactercreation" state={character}>Edit Character</NavLink></li>
                        <li onClick={handleDeleteCharacterClick}>Delete Character</li>
                    </ul>
                </div>
            </button>
            <h3>{character.character_name}</h3>
            <div className={styles.characterSubrace}>{character.subrace.name}</div>
            <div className={styles.characterClass}>
                {
                    character.hasOwnProperty('cache_class')?
                    character.cache_class:
                    character.subclass.map((s) => s.subclass.name).join(" / ")
                    + ' ' 
                    + character.levels.map((c) => c.char_class.name).join(" / ")
                }
            </div>
            <div className={styles.level}>{character.levels.map((l) => l.level).join("")}</div>
        </button>
    );
};

export default CharacterTile;
