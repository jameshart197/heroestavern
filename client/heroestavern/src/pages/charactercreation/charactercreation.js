import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreationForm1 from "./forms/creation1";
import styles from "./charactercreation.module.css";
import CreationForm2 from "./forms/creation2";
import CreationForm3 from "./forms/creation3";
import CreationForm4 from "./forms/creation4";
import CharacterModel from "../../models/createcharmodel";
import CharModel from "../../models/charmodel";
import { postBaseCharacter, postCharacterAttributes, postCharacterLevel, postCharacterSubclass, putBaseCharacter, updateCharacter } from "../../helpers/api";
import { getCharList, getToken, setCharList } from "../../helpers/caching.service.api";
import { useCurrentUser } from "../../contexts/currentUserContext";
import toast from "react-hot-toast";
import { getCharacterInfo } from "../../helpers/dto";

const CharacterCreation = () => {
    const user = useCurrentUser() || {};
    const location = useLocation();
    console.log(location, location.state)
    const Character = location.state
    const [currentPage, setCurrentPage] = useState(0);
    const [characterState, setCharacterState] = useState({ ...CharModel, subclass: [], user: user.pk });
    const updateBaseCharacter = () => {
        const formdata = new FormData(document.getElementsByTagName("form")[0]);
        console.log("before pruning:", Array.from(formdata.entries()));
        for (const tuple of formdata.entries()) {
            if (!Object.keys(CharacterModel).some((key) => key == tuple[0])) {
                formdata.delete(tuple[0]);
            }
        }
        console.log("after pruning:", Array.from(formdata.entries()))
        if (characterState.baseCharacter) {
            for (const tuple of characterState.baseCharacter.entries()) {
                formdata.append(tuple[0], tuple[1]);
            }
            if (!characterState.baseCharacter.has("user")) {
                formdata.append("user", user.pk);
            }
        }
        console.log("after merging:", Array.from(formdata.entries()));
        setCharacterState({ ...characterState, baseCharacter: formdata });
    };
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.pk) {
            navigate("/login/");
            toast.error("Oops! You aren't logged in. Please log in and try again.")
        }
        if(Character) {
            const existingCharacter = getCharacterInfo(Character, user.id);
            setCharacterState(existingCharacter);
        }
    }, []);
    const handleNextClick = async () => {
        updateBaseCharacter();
        switch (currentPage) {
            case 0:
                if (characterState.character_name && characterState.subrace && characterState.subclass[0]) {
                    setCurrentPage(currentPage + 1);
                } else {
                    alert("Please fill out all fields");
                }
                break;
            case 2:
                if (characterState.background) {
                    setCurrentPage(currentPage + 1);
                } else {
                    alert("Please select a background");
                }
                break;
            case 3:
                const token = getToken();
                const baseCharacter = Character?
                    await putBaseCharacter(Character.id, characterState.baseCharacter, token):
                    await postBaseCharacter(characterState.baseCharacter, token);
                console.log(baseCharacter);
                const charSubclass = await postCharacterSubclass(characterState.subclass[0].id, baseCharacter.id);
                const charLevel = await postCharacterLevel(characterState.charlevel, baseCharacter.id, characterState.charclass.id);
                const charAttributes = await postCharacterAttributes(
                    { attribute: 1, score: characterState.strength || 10 },
                    { attribute: 2, score: characterState.dexterity || 10 },
                    { attribute: 3, score: characterState.constitution || 10 },
                    { attribute: 4, score: characterState.intelligence || 10 },
                    { attribute: 5, score: characterState.wisdom || 10 },
                    { attribute: 6, score: characterState.charisma || 10 },
                    baseCharacter.id
                );
                delete baseCharacter.character_art;
                await updateCharacter(
                    baseCharacter.id,
                    {
                        ...baseCharacter,
                        subclass: [charSubclass.id],
                        levels: [charLevel.id],
                        attributes: charAttributes.map((a) => a.id),
                        faith: characterState.faith,
                        notes: characterState.notes,
                        backstory: characterState.backstory,
                        allies: characterState.allies,
                        enemies: characterState.enemies,
                        factions_and_orgs: characterState.factions_and_orgs,
                        hit_points: characterState.hit_points,
                        hit_points: characterState.armor_class
                    },
                    token
                );
                const myCharList = getCharList();
                myCharList.push({
                    character_name:characterState.character_name, 
                    subrace: characterState.selectedSubrace, 
                    cache_class: characterState.subclass[0].name + ' ' + characterState.charclass.name, 
                    levels: [charLevel]
                });
                setCharList(myCharList);
                navigate("/");
                break;
            default:
                setCurrentPage(currentPage + 1);
        }
    };
    const handlePreviousClick = () => {
        setCurrentPage(currentPage - 1);
    };
    const renderSwitch = () => {
        switch (currentPage) {
            case 0:
                return <CreationForm1 characterState={characterState} setCharacterState={setCharacterState}></CreationForm1>;
            case 1:
                return <CreationForm2 characterState={characterState} setCharacterState={setCharacterState}></CreationForm2>;
            case 2:
                return <CreationForm3 characterState={characterState} setCharacterState={setCharacterState}></CreationForm3>;
            case 3:
                return <CreationForm4 characterState={characterState} setCharacterState={setCharacterState}></CreationForm4>;
            default:
                return <CreationForm1 characterState={characterState} setCharacterState={setCharacterState}></CreationForm1>;
        }
    };
    return (
        <>
            <section>{renderSwitch()}</section>
            <section>
                {currentPage ? (
                    <button className={styles.pageButton} onClick={handlePreviousClick}>
                        Previous
                    </button>
                ) : (
                    ""
                )}
                <button className={styles.pageButton} onClick={handleNextClick}>
                    {currentPage === 3 ? "Finish and Create Character" : "Next"}
                </button>
            </section>
        </>
    );
};

export default CharacterCreation;
