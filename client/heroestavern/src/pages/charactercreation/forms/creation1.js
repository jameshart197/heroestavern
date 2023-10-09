import React, { useState } from "react";
import Races from "../../../models/races.json";
import Classes from "../../../models/classes.json";
import Subraces from "../../../models/subraces.json";
import Subclasses from "../../../models/subclasses.json";
import { Listbox } from "@headlessui/react";
import styles from "../charactercreation.module.css"

const CreationForm1 = () => {
  const [selectedRace, setSelectedRace] = useState(Races[0]);
  return (
    <form action="post">
      <label for="charnameinput">Character Name: </label>
      <input type="text" id="charnameinput" />
      <div className={styles.Fred}>
          <label for="charraceinput">Race: </label>
          <Listbox value={selectedRace} onChange={setSelectedRace}>
            <Listbox.Button>{selectedRace.name}</Listbox.Button>
            <Listbox.Options>
              {Races.map((race) => (
                <Listbox.Option
                  key={race.id}
                  value={race}
                >
                  {race.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
      </div>
      <label for="charsubraceinput">Subrace: </label>
      <input type="text" id="charsubraceinput" />
      <label for="charclassinput">Class: </label>
      <input type="text" id="charclassinput" />
      <label for="charsubclassinput">Subclass: </label>
      <input type="text" id="charsubclassinput" />
      <label for="charlevelinput">Level: </label>
      <input type="number" id="charlevelinput" min="1" max="20" />
      <input type="submit" />
    </form>
  );
};

export default CreationForm1;
