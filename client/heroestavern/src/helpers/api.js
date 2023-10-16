import CharacterModel from "../models/createcharmodel";

export const postBaseCharacter =async (basechar) => {
  const newChar = Object.keys(CharacterModel).reduce((a,b)=>{
    a[b]=basechar[b];
    return a
  }, {})
    return await postData("api", 'characters', newChar)
}

export const signUp =async (signUpData) => {
  return await postData('dj-rest-auth', 'registration', signUpData)
}

// const postCompleteCharacter =async () => {
    
// }


async function postData(area="", url = "", data = {}) {
    if (!url || !area) {
      console.error("url and area must be defined")
    return undefined;
    }
    url = `https://8000-jameshart19-heroestaver-phaga8fole7.ws-eu105.gitpod.io/${area}/${url}/`
    let response
    try {
      response = await fetch(url, {
        method: "POST", 
        mode: "cors", 
        headers: {
          "Content-Type": "application/json",
        },
        redirect: 'follow',
        body: JSON.stringify(data), 
      }).catch(err=>{
        console.log(err)
      });
    } catch(err) {
      console.log(err)
    }
      if (response.status >=200 && response.status <300) {
        return await response.json();
      }
      throw await response.json(); 
  }
  
  // response.status >=200 && response.status <300