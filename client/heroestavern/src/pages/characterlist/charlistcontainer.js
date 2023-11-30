import React from "react";
import CharacterTile from "../../components/charactertile/charactertile";
import styles from "./characterlist.module.css";
import NoChars from "../../components/nochars/nochars";

const CharListContainer = ({ myCharacterList, setMyCharacterList }) => {
    return (
        <container className={styles.charListContainer}>
            {myCharacterList.length ? (
                myCharacterList.map((c) => <CharacterTile key={c.id} character={c} list={[myCharacterList, setMyCharacterList]}></CharacterTile>)
            ) : (
                <NoChars></NoChars>
            )}
        </container>
    );
};

export default CharListContainer;
