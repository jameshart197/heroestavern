import React, { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import styles from "../charactercreation.module.css";
import { getAlignments, getBackgrounds } from "../../../helpers/api";

const CreationForm3 = ({ characterState, setCharacterState }) => {
  const [backgroundList, setBackgroundList] = useState([])
  const [alignmentList, setAlignmentList] = useState([])
  const [selectedBackground, setSelectedBackground] = useState(characterState.background || {});
  const [selectedAlignment, setSelectedAlignment] = useState(characterState.alignment || {});

  useEffect(
    () => {
      const fetchData = async () => {
        const [backgrounds, alignments] = await Promise.all([getBackgrounds(), getAlignments()]);
        setBackgroundList(backgrounds);
        setAlignmentList(alignments);
        setSelectedAlignment(alignments[0])
        setSelectedBackground(backgrounds[0])
      }
      fetchData().catch(console.error)
    }, []
  )
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
          <Listbox.Button className={styles.inputs}>
            {selectedBackground.name}
          </Listbox.Button>
          <Listbox.Options>
            {backgroundList.map((background) => (
              <Listbox.Option key={background.id} value={background}>
                {background.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div>
        <label for="charnameinput">Age:</label>
        <input type="text" id="charnameinput" className={styles.inputs} onChange={handleAgeChange} value={characterState.age}/>
      </div>
      <div>
        <label for="charnameinput">Height:</label>
        <input type="text" id="charnameinput" className={styles.inputs} onChange={handleHeightChange} value={characterState.height}/>
      </div>
      <div>
        <label for="charnameinput">Weight:</label>
        <input type="text" id="charnameinput" className={styles.inputs} onChange={handleWeightChange} value={characterState.weight}/>
      </div>
      <div>
        <label for="charalignmentinput">Alignment: </label>
        <Listbox value={selectedAlignment} onChange={handleAlignmentChange}>
          <Listbox.Button className={styles.inputs}>
            {selectedAlignment.name}
          </Listbox.Button>
          <Listbox.Options>
            {alignmentList.map((alignment) => (
              <Listbox.Option key={alignment.id} value={alignment}>
                {alignment.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div>
        <label for="charnameinput">Faith:</label>
        <input type="text" id="charnameinput" className={styles.inputs} onChange={handleFaithChange} value={characterState.faith}/>
      </div>
    </form>
  );
};

export default CreationForm3;
