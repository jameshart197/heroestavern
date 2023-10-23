import React, { useEffect, useState } from "react"
import { getCharacterList } from "../../helpers/api"
import { getToken } from "../../helpers/currentuser.api";
import CharacterTile from "../../components/charactertile/charactertile";

const CharacterList = () => {
    const [myCharacterList, setMyCharacterList] = useState([]);
    useEffect(
        () => {
          const fetchData = async () => {
            const charlist = await getCharacterList(getToken());
            setMyCharacterList(charlist);
          }
          fetchData().catch(console.error)
        }, []
      )
    
    return (
        <main>
            {myCharacterList.map((c) => (
                <CharacterTile key={c.id} character={c}></CharacterTile>
            ))}
        </main>
    )
}

export default CharacterList