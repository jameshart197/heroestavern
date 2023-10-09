import React from "react"


const CharacterCreation = () => {
    return (
        <form action="post">
            <label for="charnameinput">Character Name: </label>
            <input type="text" id="charnameinput"/>
            <label for="charraceinput">Race: </label>
            <input type="text" id="charraceinput"/>
            <label for="charsubraceinput">Subrace: </label>
            <input type="text" id="charsubraceinput"/>
            <label for="charclassinput">Class: </label>
            <input type="text" id="charclassinput"/>
            <label for="charsubclassinput">Subclass: </label>
            <input type="text" id="charsubclassinput"/>
            <label for="charlevelinput">Level: </label>
            <input type="number" id="charlevelinput" min="1" max="20"/>
        </form>
    )
}


export default CharacterCreation