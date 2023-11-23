import React, { useEffect, useState } from "react";
import { getRaces, getCharclasses, getSubclasses, getSubraces } from "../../../helpers/api";
import { Listbox } from "@headlessui/react";
import styles from "../charactercreation.module.css";




const CreationForm1 = ({ characterState, setCharacterState }) => {
  const [raceList, setRaceList] = useState([])
  const [subraceList, setSubraceList] = useState([])
  const [charclassList, setCharclassList] = useState([])
  const [subclassList, setSubclassList] = useState([])
  const [selectedRace, setSelectedRace] = useState(characterState?.race || {});
  const [selectedClass, setSelectedClass] = useState(characterState?.charclass || {});
  const [selectedSubrace, setSelectedSubrace] = useState(characterState?.subrace || {});
  const [selectedSubclass, setSelectedSubclass] = useState(characterState?.subclass[0] || {});


  useEffect(
    () => {
      const fetchData = async () => {
        const [races, subraces] = await Promise.all([getRaces(), getSubraces()]);
        setRaceList(races);
        setSubraceList(subraces);
        setSelectedRace(races[0]);
        setSelectedSubrace(subraces[0].id);
        const [charclasses, subclasses] = await Promise.all([getCharclasses(), getSubclasses()]);
        setCharclassList(charclasses);
        setSubclassList(subclasses);
        setSelectedClass(charclasses[0]);
        setSelectedSubclass(subclasses[0]);
      }
      fetchData().catch(console.error)
    }, []
  )


  const handleCharacterNameChange = (e) => {
    setCharacterState({...characterState, character_name: e.currentTarget.value})
  }
  const handleGenderChange = (e) => {
    setCharacterState({...characterState, gender: e.currentTarget.value})
  }
  const handleImageChange = (e) => {
    setCharacterState({...characterState, character_art: URL.createObjectURL(e.target.files[0]), character_art_name: e.target.files[0].name})
  }
  const handleRaceChange = (e) => {
    setSelectedRace(e)
    setCharacterState({...characterState, race: e})
  }
  const handleSubraceChange = (e) => {
    setSelectedSubrace(e)
    setCharacterState({...characterState, subrace: e, selectedSubrace: subraceList.find(sr => sr.id==e)})
  }
  const handleCharclassChange = (e) => {
    setSelectedClass(e)
    setCharacterState({...characterState, charclass: e})
  }
  const handleSubclassChange = (e) => {
    setSelectedSubclass(e)
    setCharacterState({...characterState, subclass: [e]})
  }
  const handleLevelChange = (e) => {
    setCharacterState({...characterState, charlevel: e.currentTarget.value})
  }
  return characterState?(
    <form action="post" className={styles.creationForm} enctype='multipart/form-data'>
      <div>
        <label for="character_name">Character Name: </label>
        <input type="text" name="character_name" className={styles.inputs} onChange={handleCharacterNameChange} value={characterState.character_name}/>
      </div>
      <div>
        <label for="gender">Gender:</label>
        <input type="text" name="gender" className={styles.inputs} onChange={handleGenderChange} value={characterState.gender}/>
      </div>
      <div>
        <label for="character_art">Character Art</label>
        <input type="file" name="character_art" onChange={handleImageChange} className={styles.fileInput}/>
      </div>
      <div>
        <label for="charraceinput">Race: </label>
        <Listbox value={selectedRace} onChange={handleRaceChange}>
          <Listbox.Button className={styles.inputs}>
            {selectedRace?.name}
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
        <label for="subrace">Subrace: </label>
        <Listbox value={selectedSubrace} onChange={handleSubraceChange} name="subrace">
          <Listbox.Button className={styles.inputs}>{subraceList.find(sr=>sr.id==selectedSubrace)?.name}</Listbox.Button>
          <Listbox.Options>
            {subraceList.filter((sr) => sr.race === selectedRace.name).map(
              (subrace) => (
                <Listbox.Option key={subrace.id} value={subrace.id}>
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
          <Listbox.Button className={styles.inputs}>
            {selectedClass?.name}
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
          <Listbox.Button className={styles.inputs}>{selectedSubclass?.name}</Listbox.Button>
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
      <div id={styles.levelInput}>
        <label for="charlevelinput">Level: </label>
        <input type="number" id="charlevelinput" min="1" max="20" defaultValue={1} onChange={handleLevelChange} value={characterState.charlevel}/>
      </div>
    </form>
  ):'';
};

export default CreationForm1;
