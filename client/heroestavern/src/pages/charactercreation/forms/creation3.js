import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import Backgrounds from "../../../models/backgrounds.json";
import Alignments from "../../../models/alignments.json";
import styles from "../charactercreation.module.css";

const CreationForm3 = ({ characterState, setCharacterState }) => {
  const [selectedBackground, setSelectedBackground] = useState(Backgrounds.find(bg=>bg.id===characterState.background) || Backgrounds[0]);
  const [selectedAlignment, setSelectedAlignment] = useState(Alignments.find(al=>al.id===characterState.alignment) || Alignments[0]);
  const handleBackgroundChange = (e) => {
    setSelectedBackground(e)
    setCharacterState({...characterState, background: e.id})
  }
  const handleAlignmentChange = (e) => {
    setSelectedAlignment(e)
    setCharacterState({...characterState, alignment: e.id})
  }
  const handleAgeChange = (e) => {
    setCharacterState({...characterState, age: e.currentTarget.value})
  }
  const handleHeightChange = (e) => {
    setCharacterState({...characterState, height: e.currentTarget.value})
  }
  const handleWeightChange = (e) => {
    setCharacterState({...characterState, weight: e.currentTarget.value})
  }
  const handleFaithChange = (e) => {
    setCharacterState({...characterState, faith: e.currentTarget.value})
  }
  return (
    <form action="post" className={styles.creationForm}>
      <div>
        <label for="charbackgroundinput">Background: </label>
        <Listbox value={selectedBackground} onChange={handleBackgroundChange}>
          <Listbox.Button className={styles.Inputs}>
            {selectedBackground.name}
          </Listbox.Button>
          <Listbox.Options>
            {Backgrounds.map((background) => (
              <Listbox.Option key={background.id} value={background}>
                {background.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div>
        <label for="charnameinput">Age:</label>
        <input type="text" id="charnameinput" className={styles.Inputs} onChange={handleAgeChange} value={characterState.age}/>
      </div>
      <div>
        <label for="charnameinput">Height:</label>
        <input type="text" id="charnameinput" className={styles.Inputs} onChange={handleHeightChange} value={characterState.height}/>
      </div>
      <div>
        <label for="charnameinput">Weight:</label>
        <input type="text" id="charnameinput" className={styles.Inputs} onChange={handleWeightChange} value={characterState.weight}/>
      </div>
      <div>
        <label for="charalignmentinput">Alignment: </label>
        <Listbox value={selectedAlignment} onChange={handleAlignmentChange}>
          <Listbox.Button className={styles.Inputs}>
            {selectedAlignment.name}
          </Listbox.Button>
          <Listbox.Options>
            {Alignments.map((alignment) => (
              <Listbox.Option key={alignment.id} value={alignment}>
                {alignment.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div>
        <label for="charnameinput">Faith:</label>
        <input type="text" id="charnameinput" className={styles.Inputs} onChange={handleFaithChange} value={characterState.faith}/>
      </div>
    </form>
  );
};

export default CreationForm3;
