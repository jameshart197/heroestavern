import React, { useState } from "react";
import CreationForm1 from "./forms/creation1";
import styles from "./charactercreation.module.css";
import CreationForm2 from "./forms/creation2";
import CreationForm3 from "./forms/creation3";
import CreationForm4 from "./forms/creation4";

const CharacterCreation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const renderSwitch = () => {
    switch (currentPage) {
      case 0:
        return <CreationForm1></CreationForm1>;
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
        {currentPage?(<button className={styles.pageButton}>Previous</button>):''}
        <button className={styles.pageButton}>{currentPage===3?'Finish and Create Character':'Next'}</button>
      </section>
    </main>
  );
};

export default CharacterCreation;
