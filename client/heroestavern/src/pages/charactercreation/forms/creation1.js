import React, { useState } from "react";
import Races from "../../../models/races.json";
import Classes from "../../../models/classes.json";
import Subraces from "../../../models/subraces.json";
import Subclasses from "../../../models/subclasses.json";
import { Listbox } from "@headlessui/react";
import styles from "../charactercreation.module.css";

const CreationForm1 = ({ characterState, setCharacterState }) => {
  const [selectedRace, setSelectedRace] = useState(characterState.race || Races[0]);
  const [selectedClass, setSelectedClass] = useState(characterState.charclass || Classes[0]);
  const [selectedSubrace, setSelectedSubrace] = useState(Subraces.find(sr=>sr.id===characterState.subrace) || Subraces[0]);
  const [selectedSubclass, setSelectedSubclass] = useState(Subclasses.find(sc=>sc.id===characterState.subclass[0]) || Subclasses[0]);
  const handleCharacterNameChange = (e) => {
    setCharacterState({...characterState, character_name: e.currentTarget.value})
  }
  const handleRaceChange = (e) => {
    setSelectedRace(e)
    setCharacterState({...characterState, race: e})
  }
  const handleSubraceChange = (e) => {
    setSelectedSubrace(e)
    setCharacterState({...characterState, subrace: e.id})
  }
  const handleCharclassChange = (e) => {
    setSelectedClass(e)
    setCharacterState({...characterState, charclass: e})
  }
  const handleSubclassChange = (e) => {
    setSelectedSubclass(e)
    setCharacterState({...characterState, subclass: [e.id]})
  }
  const handleLevelChange = (e) => {
    setCharacterState({...characterState, charlevel: e.currentTarget.value})
  }
  return (
    <form action="post" className={styles.creationForm}>
      <div>
        <label for="charnameinput">Character Name: </label>
        <input type="text" id="charnameinput" className={styles.Inputs} onChange={handleCharacterNameChange} value={characterState.character_name}/>
      </div>
      <div>
        <label for="charraceinput">Race: </label>
        <Listbox value={selectedRace} onChange={handleRaceChange}>
          <Listbox.Button className={styles.Inputs}>
            {selectedRace.name}
          </Listbox.Button>
          <Listbox.Options>
            {Races.map((race) => (
              <Listbox.Option key={race.id} value={race}>
                {race.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div>
        <label for="charsubraceinput">Subrace: </label>
        <Listbox value={selectedSubrace} onChange={handleSubraceChange}>
          <Listbox.Button className={styles.Inputs}>{selectedSubrace.name}</Listbox.Button>
          <Listbox.Options>
            {Subraces.filter((sr) => sr.race === selectedRace.name).map(
              (subrace) => (
                <Listbox.Option key={subrace.id} value={subrace}>
                  {subrace.name}
                </Listbox.Option>
              )
            )}
          </Listbox.Options>
        </Listbox>
      </div>
      <div>
        <label for="charclassinput">Class: </label>
        <Listbox value={selectedClass} onChange={handleCharclassChange}>
          <Listbox.Button className={styles.Inputs}>
            {selectedClass.name}
          </Listbox.Button>
          <Listbox.Options>
            {Classes.map((charClass) => (
              <Listbox.Option key={charClass.id} value={charClass}>
                {charClass.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div>
        <label for="charsubclassinput">Subclass: </label>
        <Listbox value={selectedSubclass} onChange={handleSubclassChange}>
          <Listbox.Button className={styles.Inputs}>{selectedSubclass.name}</Listbox.Button>
          <Listbox.Options>
            {Subclasses.filter((sc) => sc.parent_class === selectedClass.name).map(
              (subclasses) => (
                <Listbox.Option key={subclasses.id} value={subclasses}>
                  {subclasses.name}
                </Listbox.Option>
              )
            )}
          </Listbox.Options>
        </Listbox>
      </div>
      <div id={styles.LevelInput}>
        <label for="charlevelinput">Level: </label>
        <input type="number" id="charlevelinput" min="1" max="20" defaultValue={1} onChange={handleLevelChange} value={characterState.charlevel}/>
      </div>
    </form>
  );
};

export default CreationForm1;
