import React, { useState } from "react";
import Races from "../../../models/races.json";
import Classes from "../../../models/classes.json";
import Subraces from "../../../models/subraces.json";
import Subclasses from "../../../models/subclasses.json";
import { Listbox } from "@headlessui/react";
import styles from "../charactercreation.module.css";

const CreationForm1 = () => {
  const [selectedRace, setSelectedRace] = useState(Races[0]);
  const [selectedClass, setSelectedClass] = useState(Classes[0]);
  const [selectedSubrace, setSelectedSubrace] = useState(Subraces[0]);
  const [selectedSubclass, setSelectedSubclass] = useState(Subclasses[0]);
  return (
    <form action="post" className={styles.creationForm}>
      <div>
        <label for="charnameinput">Character Name: </label>
        <input type="text" id="charnameinput" className={styles.Inputs} />
      </div>
      <div>
        <label for="charraceinput">Race: </label>
        <Listbox value={selectedRace} onChange={setSelectedRace}>
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
        <Listbox value={selectedSubrace} onChange={setSelectedSubrace}>
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
        <Listbox value={selectedClass} onChange={setSelectedClass}>
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
        <Listbox value={selectedSubclass} onChange={setSelectedSubclass}>
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
        <input type="number" id="charlevelinput" min="1" max="20" />
      </div>
      <div id={styles.SubmitInput}>
        <input type="submit" />
      </div>
    </form>
  );
};

export default CreationForm1;
