import React, { useState } from "react";
import CreationForm1 from "./forms/creation1";
import styles from "./charactercreation.module.css";
import CreationForm2 from "./forms/creation2";
import CreationForm3 from "./forms/creation3";
import CreationForm4 from "./forms/creation4";
import CharacterModel from "../../models/createcharmodel"

const CharacterCreation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [characterState, setCharacterState] = useState(CharacterModel);
  const handleNextClick = () => {
    switch (currentPage) {
        case 0:
            
    }
    setCurrentPage(currentPage+1)
  }
  const handlePreviousClick = () => {
    setCurrentPage(currentPage-1)
  }
  const renderSwitch = () => {
    switch (currentPage) {
      case 0:
        return <CreationForm1 characterState={characterState} setCharacterState={setCharacterState}></CreationForm1>;
      case 1:
        return <CreationForm2></CreationForm2>;
      case 2:
        return <CreationForm3></CreationForm3>;
      case 3:
        return <CreationForm4></CreationForm4>;
      default:
        return <CreationForm1></CreationForm1>;
    }
  };
  return (
    <main>
      <section>{renderSwitch()}</section>
      <section>
        {currentPage?(<button className={styles.pageButton} onClick={handlePreviousClick}>Previous</button>):''}
        <button className={styles.pageButton} onClick={handleNextClick}>{currentPage===3?'Finish and Create Character':'Next'}</button>
      </section>
      <pre>
        {JSON.stringify(characterState, null, 2)}
      </pre>
    </main>
  );
};

export default CharacterCreation;
