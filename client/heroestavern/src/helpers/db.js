

export const postBaseCharacter =async (basechar) => {
    await postData('characters', basechar)
}


const postCompleteCharacter =async () => {
    
}


async function postData(url = "", data = {}) {
    url = `https://8000-jameshart19-heroestaver-phaga8fole7.ws-eu105.gitpod.io/api/characters`
    const response = await fetch(url, {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }
