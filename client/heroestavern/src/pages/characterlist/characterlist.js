import React, { useEffect, useState } from "react";
import { getCharacterList } from "../../helpers/api";
import { getCharList, getToken, setCharList } from "../../helpers/caching.service.api";
import CharacterTile from "../../components/charactertile/charactertile";
import styles from "./characterlist.module.css";
import LoginOrSignup from "../../components/loginorsignup/loginorsignup";
import { useCurrentUser } from "../../contexts/currentUserContext";
import Loading from "../../components/loading/loading";
import CharListContainer from "./charlistcontainer";

const CharacterList = () => {
    const [loadCharState, setLoadCharState] = useState(false);
    const loginState = useCurrentUser();
    const [myCharacterList, setMyCharacterList] = useState(getCharList());
    useEffect(() => {
        const fetchData = async () => {
            if (loginState) {
                const charlist = await getCharacterList(getToken());
                setLoadCharState(true);
                setCharList(charlist);
                setMyCharacterList(charlist);
            }
        };
        fetchData().catch(console.error);
    }, [loginState]);

    return (
        <main>
            {loginState ? (
                loadCharState ? (
                    <CharListContainer myCharacterList={myCharacterList} setMyCharacterList={setMyCharacterList}></CharListContainer>
                ) : (
                    <Loading></Loading>
                )
            ) : (
                <container>
                    <LoginOrSignup></LoginOrSignup>
                </container>
            )}
        </main>
    );
};

export default CharacterList;
