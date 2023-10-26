import React, { useEffect, useState } from "react";
import { getCharacterList } from "../../helpers/api";
import { getToken } from "../../helpers/currentuser.api";
import CharacterTile from "../../components/charactertile/charactertile";
import styles from "./characterlist.module.css"

const CharacterList = () => {
  const loginState = useCurrentUser();
  const [myCharacterList, setMyCharacterList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const charlist = await getCharacterList(getToken());
      setMyCharacterList(charlist);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <main>
      {loginState?(
      <container className={styles.charListContainer}>
        {myCharacterList.map((c) => (
          <CharacterTile key={c.id} character={c}></CharacterTile>
        ))}
      </container>
      ):(
        <container>
          <LoginOrSignup></LoginOrSignup>
        </container>
      )}
    </main>
  );
};

export default CharacterList;
