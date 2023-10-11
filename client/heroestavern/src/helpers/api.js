import CharacterModel from "../models/createcharmodel";

export const postBaseCharacter =async (basechar) => {
  const newChar = Object.keys(CharacterModel).reduce((a,b)=>{
    a[b]=basechar[b];
    return a
  }, {})
    return await postData('characters', newChar)
}


// const postCompleteCharacter =async () => {
    
// }


async function postData(url = "", data = {}) {
    url = `https://8000-jameshart19-heroestaver-phaga8fole7.ws-eu105.gitpod.io/api/${url}/`
    const response = await fetch(url, {
      method: "POST", 
      mode: "cors", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: 'follow',
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }
