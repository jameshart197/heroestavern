import React, { useEffect, useState } from "react";
import { getRaces, getCharclasses, getSubclasses, getSubraces } from "../../../helpers/api";
import { Listbox } from "@headlessui/react";
import styles from "../charactercreation.module.css";




const CreationForm1 = ({ characterState, setCharacterState }) => {
  const [raceList, setRaceList] = useState([])
  const [subraceList, setSubraceList] = useState([])
  const [charclassList, setCharclassList] = useState([])
  const [subclassList, setSubclassList] = useState([])
  const [selectedRace, setSelectedRace] = useState(characterState.race || {});
  const [selectedClass, setSelectedClass] = useState(characterState.charclass || {});
  const [selectedSubrace, setSelectedSubrace] = useState(subraceList.find(sr=>sr.id===characterState.subrace) || {});
  const [selectedSubclass, setSelectedSubclass] = useState(subclassList.find(sc=>sc.id===characterState.subclass[0]) || {});


  useEffect(
    () => {
      const fetchData = async () => {
        const races = await getRaces();
        const subraces = await getSubraces();
        const charclasses = await getCharclasses();
        const subclasses = await getSubclasses();
        setRaceList(races);
        setSubraceList(subraces);
        setCharclassList(charclasses);
        setSubclassList(subclasses);
        setSelectedRace(races[0]);
        setSelectedClass(charclasses[0]);
        setSelectedSubrace(subraces[0]);
        setSelectedSubclass(subclasses[0]);
      }
      fetchData().catch(console.error)
    }, []
  )


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
            {raceList.map((race) => (
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
            {subraceList.filter((sr) => sr.race === selectedRace.name).map(
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
            {charclassList.map((charClass) => (
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
            {subclassList.filter((sc) => sc.parent_class === selectedClass.name).map(
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
