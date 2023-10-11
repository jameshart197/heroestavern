import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import Backgrounds from "../../../models/backgrounds.json";
import Alignments from "../../../models/alignments.json";
import styles from "../charactercreation.module.css";

const CreationForm3 = () => {
  const [selectedBackground, setSelectedBackground] = useState(Backgrounds[0]);
  const [selectedAlignment, setSelectedAlignment] = useState(Alignments[0]);
  return (
    <form action="post" className={styles.creationForm}>
      <div>
        <label for="charbackgroundinput">Background: </label>
        <Listbox value={selectedBackground} onChange={setSelectedBackground}>
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
        <input type="text" id="charnameinput" className={styles.Inputs}/>
      </div>
      <div>
        <label for="charnameinput">Height:</label>
        <input type="text" id="charnameinput" className={styles.Inputs} />
      </div>
      <div>
        <label for="charnameinput">Weight:</label>
        <input type="text" id="charnameinput" className={styles.Inputs} />
      </div>
      <div>
        <label for="charalignmentinput">Alignment: </label>
        <Listbox value={selectedAlignment} onChange={setSelectedAlignment}>
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
        <input type="text" id="charnameinput" className={styles.Inputs} />
      </div>
      {/* <div id={styles.SubmitInput}>
        <input type="submit" className={styles.submitButton} />
      </div> */}
    </form>
  );
};

export default CreationForm3;
