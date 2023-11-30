import React, { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import styles from "../charactercreation.module.css";
import { getAlignments, getBackgrounds } from "../../../helpers/api";

const CreationForm3 = ({ characterState, setCharacterState }) => {
    const [backgroundList, setBackgroundList] = useState([]);
    const [alignmentList, setAlignmentList] = useState([]);
    const [selectedBackground, setSelectedBackground] = useState(characterState?.background || {});
    const [selectedAlignment, setSelectedAlignment] = useState(characterState?.alignment || {});

    useEffect(() => {
        const fetchData = async () => {
            const [backgrounds, alignments] = await Promise.all([getBackgrounds(), getAlignments()]);
            setBackgroundList(backgrounds);
            setAlignmentList(alignments);
            setSelectedAlignment(characterState?.alignment || alignments[0].id);
            setSelectedBackground(characterState?.background || backgrounds[0].id);
        };
        fetchData().catch(console.error);
    }, []);
    const handleBackgroundChange = (e) => {
        setSelectedBackground(e);
        setCharacterState({ ...characterState, background: e, selectedBackground: backgroundList.find((b) => b.id == e) });
    };
    const handleAlignmentChange = (e) => {
        setSelectedAlignment(e);
        setCharacterState({ ...characterState, alignment: e, selectedAlignment: alignmentList.find((a) => a.id == e) });
    };
    const handleAgeChange = (e) => {
        setCharacterState({ ...characterState, age: e.currentTarget.value });
    };
    const handleHeightChange = (e) => {
        setCharacterState({ ...characterState, height: e.currentTarget.value });
    };
    const handleWeightChange = (e) => {
        setCharacterState({ ...characterState, weight: e.currentTarget.value });
    };
    const handleFaithChange = (e) => {
        setCharacterState({ ...characterState, faith: e.currentTarget.value });
    };
    const handleHPChange = (e) => {
        setCharacterState({ ...characterState, hit_points: e.currentTarget.value });
    };
    const handleACChange = (e) => {
      setCharacterState({ ...characterState, armor_class: e.currentTarget.value });
  };
    return (
        <form action="post" className={styles.creationForm}>
            <div>
                <label for="background">Background: </label>
                <Listbox value={selectedBackground} onChange={handleBackgroundChange} name="background">
                    <Listbox.Button className={styles.inputs}>{backgroundList.find((b) => b.id == selectedBackground)?.name}</Listbox.Button>
                    <Listbox.Options>
                        {backgroundList.map((background) => (
                            <Listbox.Option key={background.id} value={background.id}>
                                {background.name}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
            <div>
                <label for="age">Age:</label>
                <input type="text" name="age" className={styles.inputs} onChange={handleAgeChange} value={characterState.age} />
            </div>
            <div>
                <label for="height">Height:</label>
                <input type="text" name="height" className={styles.inputs} onChange={handleHeightChange} value={characterState.height} />
            </div>
            <div>
                <label for="weight">Weight:</label>
                <input type="text" name="weight" className={styles.inputs} onChange={handleWeightChange} value={characterState.weight} />
            </div>
            <div>
                <label for="alignment">Alignment: </label>
                <Listbox value={selectedAlignment} onChange={handleAlignmentChange} name="alignment">
                    <Listbox.Button className={styles.inputs}>{alignmentList.find((a) => a.id == selectedAlignment)?.name}</Listbox.Button>
                    <Listbox.Options>
                        {alignmentList.map((alignment) => (
                            <Listbox.Option key={alignment.id} value={alignment.id}>
                                {alignment.name}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
            <div>
                <label for="faith">Faith:</label>
                <input type="text" id="faith" className={styles.inputs} onChange={handleFaithChange} value={characterState.faith} />
            </div>
            <div id={styles.levelInput}>
                <label for="charhpinput">Hit Points: </label>
                <input type="number" id="charhpinput" min="6" max="300" defaultValue={12} onChange={handleHPChange} value={characterState.hit_points} />
            </div>
            <div id={styles.levelInput}>
                <label for="characinput">Armor Class: </label>
                <input type="number" id="characinput" min="8" max="30" defaultValue={10} onChange={handleACChange} value={characterState.armor_class} />
            </div>
        </form>
    );
};

export default CreationForm3;
