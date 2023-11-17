import React, { useEffect, useState } from "react";
import { getCharacterList } from "../../helpers/api";
import { getCharList, getToken, setCharList } from "../../helpers/caching.service.api";
import CharacterTile from "../../components/charactertile/charactertile";
import styles from "./characterlist.module.css"
import LoginOrSignup from "../../components/loginorsignup/loginorsignup";
import { useCurrentUser } from "../../contexts/currentUserContext";
import Loading from "../../components/loading/loading";

const CharacterList = () => {
  const loginState = useCurrentUser();
  const [myCharacterList, setMyCharacterList] = useState(getCharList());
  useEffect(() => {
    const fetchData = async () => {
      if(loginState) {
        const charlist = await getCharacterList(getToken());
        setCharList(charlist);
        setMyCharacterList(charlist);
      }
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <main>
      {loginState?(
      <container className={styles.charListContainer}>
        {myCharacterList.length?myCharacterList.map((c) => (
          <CharacterTile key={c.id} character={c} list={[myCharacterList, setMyCharacterList]}></CharacterTile>
        )):<Loading></Loading>}
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
