import React from "react";
import { useNavigate } from "react-router-dom";

const CharacterTile = ({character}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(character)
        navigate(`/characters/${character.id}`, {state:character})
    }
    return (
        <button onClick={handleClick}>
            {character.character_name}
            {character.subclass.map(s=>s.subclass.name).join(" / ")}
            {character.subrace.name}
            {character.levels.map(l=>l.level).join("")}
        </button>
    )
}

export default CharacterTile