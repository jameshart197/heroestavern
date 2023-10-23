import React from "react";
import { useNavigate } from "react-router-dom";

const CharacterTile = ({character}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(character)
        navigate(`/characters/${character.id}`, {replace:true})
    }
    return (
        <button onClick={handleClick}>
            {character.character_name}
        </button>
    )
}

export default CharacterTile