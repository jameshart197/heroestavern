import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CreationForm1 from "./forms/creation1";
import styles from "./charactercreation.module.css";
import CreationForm2 from "./forms/creation2";
import CreationForm3 from "./forms/creation3";
import CreationForm4 from "./forms/creation4";
import CharacterModel from "../../models/createcharmodel"
import { postBaseCharacter, postCharacterSubclass } from "../../helpers/api";

const CharacterCreation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [characterState, setCharacterState] = useState({...CharacterModel, subclass:[]});
  const navigate = useNavigate();
  const handleNextClick =async () => {
    switch (currentPage) {
        case 0:
            if (characterState.character_name && characterState.subrace && characterState.subclass[0]) {
              setCurrentPage(currentPage+1)              
            } else {
              alert("Please fill out all fields")
            }
            break;
        case 2:
            if(characterState.background) {
              setCurrentPage(currentPage+1)
            } else {
              alert("Please select a background")
            }
            break;              
        case 3: 
           const baseCharacter = await postBaseCharacter(characterState)
           console.log(baseCharacter)
           await postCharacterSubclass(characterState.subclass[0], baseCharacter.id)
           navigate('/', {replace:true})
           break;
        default: setCurrentPage(currentPage+1)            
    }
  }
  const handlePreviousClick = () => {
    setCurrentPage(currentPage-1)
  }
  const renderSwitch = () => {
    switch (currentPage) {
      case 0:
        return <CreationForm1 characterState={characterState} setCharacterState={setCharacterState}></CreationForm1>;
      case 1:
        return <CreationForm2 characterState={characterState} setCharacterState={setCharacterState}></CreationForm2>;
      case 2:
        return <CreationForm3 characterState={characterState} setCharacterState={setCharacterState}></CreationForm3>;
      case 3:
        return <CreationForm4 characterState={characterState} setCharacterState={setCharacterState}></CreationForm4>;
      default:
        return <CreationForm1 characterState={characterState} setCharacterState={setCharacterState}></CreationForm1>;
    }
  };
  return (
    <>
      <section>{renderSwitch()}</section>
      <pre>
        {JSON.stringify(characterState, null, 2)}
      </pre>
      <section>
        {currentPage?(<button className={styles.pageButton} onClick={handlePreviousClick}>Previous</button>):''}
        <button className={styles.pageButton} onClick={handleNextClick}>{currentPage===3?'Finish and Create Character':'Next'}</button>
      </section>
    </>
  );
};

export default CharacterCreation;
